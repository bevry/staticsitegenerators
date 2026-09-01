/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/prefer-promise-reject-errors */

import { writeFile } from 'node:fs'
import { resolve, join } from 'node:path'
import { spawnSync } from 'node:child_process'
import { ok } from 'node:assert'

import kava from 'kava'
import { equal, deepEqual } from 'assert-helpers'
import validSPDX from 'spdx-expression-validate'

import rawList from './list.js'
import { hydrate, HydrateReturn } from './util.js'

import filedirname from 'filedirname'
const [, dir] = filedirname()
const root = resolve(dir, '..')
const rawPath = join(root, 'raw.json')
const rawSourcePath = join(root, 'source', 'list.ts')
const hydratedPath = join(root, 'hydrated.json')

const fetchOptions: unknown = {
	// a `timeout` property here would do nothing, it is a node-fetch option that
	// the built-in fetch ignores, see `requestTimeout` for what replaced it
	redirect: 'error',
}

const oneSecond = 1000
const thirySeconds = oneSecond * 30
const oneMinute = oneSecond * 60

/** This should be adapted based on what we learn on what a platform supports before it hits 429 issues. */
const requestConcurrency = 40

/**
 * How long until a 429 is tried again.
 * 429 requests are us requesting too many things at once, which may vary based on the platform.
 * They will be retried indefinitely until a non-429 status is returned.
 */
const fetcherRetryDelay = oneMinute
const fetcherRetryDelayHuman = 'one minute'

/**
 * How long until a timeout of a request occurs?
 * Without this a host that accepts the connection this then stalls the suite concurrency, as the built-in fetch has no overall deadline of its own.
 */
const requestTimeout = thirySeconds

/**
 * How long to wait before the first retry of a failed request (timeout or non-429 failure status).
 * For each retry, it is doubled.
 * This should be twice the timeout, because if it struggled to respond in time of the timeout, it is unlikely it will respond in time to another request.
 */
const retryDelay = requestTimeout * 2

/** How many times to retry a failured URL before failing tit */
const retries = 3

/**
 * Log a message with the specified log level. Debug level messages are filtered out.
 * @param logLevel The log level - messages with level 7 or 'debug' will be filtered out
 * @param args The arguments to log to the console
 */
function log(logLevel: string | number, ...args: unknown[]) {
	if (logLevel === 7 || logLevel === 'debug') return
	console.log.apply(console.log, [logLevel, ...args])
}

/**
 * Pause execution for the specified number of milliseconds.
 * @param milliseconds The number of milliseconds to wait, warns if value is less than 1000
 * @returns A promise that resolves after the specified delay
 */
export function halt(milliseconds: number) {
	if (milliseconds < oneSecond) {
		console.warn(
			'halt accepts milliseconds, you may have attempted to send it seconds, as you sent a value below 1000 milliseconds',
		)
	}
	return new Promise(function (resolve) {
		setTimeout(resolve, milliseconds)
	})
}

/**
 * Fetch a URL with automatic retry on 429 (rate limit) responses.
 * @param url The URL to fetch
 * @param init The fetch options and configuration object for the request
 * @returns A promise that resolves to the fetch Response
 */
export async function fetcher(url: string, init: unknown): Promise<Response> {
	try {
		const response = await fetch(url, {
			...(init as object),
			// a fresh signal for each attempt, as a fired one cannot be reused
			signal: AbortSignal.timeout(requestTimeout),
		})
		if (response.status === 429) {
			// wait a minute
			console.warn(
				`${url} returned 429, too many requests, trying again in ${fetcherRetryDelayHuman}`,
			)
			await halt(fetcherRetryDelay)
			return await fetcher(url, init)
		}
		return response
	} catch (error) {
		// GitHub will be hitting rate limits, which we must wait for.
		// If it is due to a website bot protection, then add `testWebsite: false` to its listing.
		console.error(`Error fetching ${url}:`, error)
		return Promise.reject(error)
	}
}

/**
 * Check if a URL is accessible by making a HEAD request through a status checking service.
 * Transient outages are common across the many third-party sites in the listing, so a
 * failure is retried {@link retries} times, waiting 2, 4, then 8 seconds. Rate limiting
 * is not handled here, {@link fetcher} deals with that.
 * @param url The URL to check for accessibility
 * @returns A promise that resolves if the URL is accessible, rejects if not
 */
async function checkURL(url: string) {
	let lastError: unknown = null
	let lastStatus: number | null = null
	// this is a for loop, unlike fetcher there is no recursion here
	for (let attempt = 0; attempt <= retries; attempt++) {
		const started = Date.now()
		try {
			// use a response that caches heavily <-- no longer exists and I cannot find a backup
			// const u = new URL('https://status.bevry.workers.dev')
			// u.searchParams.set('url', url)
			// const res = await fetcher(u.toString(), fetchOptions)
			const res = await fetcher(url, fetchOptions)
			if (res.ok) return // success case, return
			// request was succesful with failure status
			lastError = null
			lastStatus = res.status
		} catch (err) {
			// request was unsuccessful, no failure status
			lastError = err
			lastStatus = null
		}
		// inform the user of how long it took, and what our plan is
		const seconds = ((Date.now() - started) / 1000).toFixed(1)
		const reason = lastError ? String(lastError) : `status ${lastStatus}`
		if (attempt === retries) {
			// we've already done all the retries
			console.warn(
				`checkURL: ${url} failed after ${seconds}s (${reason}), giving up after ${retries} retries`,
			)
		} else {
			// retry
			const delay = retryDelay * 2 ** attempt
			console.warn(
				`checkURL: ${url} failed after ${seconds}s (${reason}), retrying in ${delay / 1000} seconds (retry ${attempt + 1} of ${retries})`,
			)
			await halt(delay)
		}
	}
	// if it was successful, the earlier `return` would have happened, so this is a failure case
	if (lastError) return Promise.reject(lastError)
	equal(
		lastStatus,
		200,
		`checkURL: response http status code should be 200 success on ${url}`,
	)
}

kava.suite('static site generators list', function (suite, test) {
	test('minimum required fields', function () {
		// const missingIs: string[] = []
		rawList.forEach(function (entry) {
			const { name, github, gitlab, bitbucket, website } = entry // , is
			const location = github || gitlab || bitbucket || website
			equal(
				Boolean(name && location),
				true,
				`missing required fields on ${name || location}`,
			)
			// if (!is) missingIs.push(name)
		})
		// console.warn(
		// 	`The following ${missingIs.length} entries are missing the "is" field, please add what you can if you have time:\n${missingIs.join(
		// 		', ',
		// 	)}`,
		// )
	})

	test('licenses are valid SPDX', function () {
		rawList.forEach(function ({ name, license }) {
			if (license) {
				equal(
					validSPDX(license),
					true,
					`${name}: license of ${license} is not a valid SPDX identifier: http://spdx.org/licenses/`,
				)
			}
		})
	})

	// This suite requires every third-party repository and website in the listing
	// to be reachable, on every os in the matrix, and because `publish` declares
	// `needs: test`, an outage anywhere also blocks the deploy. Three runs in a
	// row failed on a different site that was not actually down: nestacms.com,
	// hexo.io, psyke.org. `checkURL` now retries to absorb that.
	suite('uris are valid / still exist', function (suite, test) {
		// @ts-expect-error kava isn't typed
		this.setConfig({ concurrency: requestConcurrency }) // eslint-disable-line
		rawList.forEach(function ({ name, github, website, testWebsite }) {
			if (github) {
				const githubUrl = `https://github.com/${github}`
				test(`${name}: http get github: ${githubUrl}`, function (done) {
					checkURL(githubUrl)
						.then(() => {
							done()
						})
						.catch(done)
				})
			}
			if (website && testWebsite !== false) {
				test(`${name}: http get website: ${website}`, function (done) {
					checkURL(website)
						.then(() => {
							done()
						})
						.catch(done)
				})
			}
		})
	})

	suite('local render', function (suite, test) {
		let result: HydrateReturn

		test('hydrate local data', function (done) {
			hydrate(rawList, { log, corrective: true })
				.then(function (_result) {
					ok(_result.raw, 'raw result was as expected')
					ok(_result.hydrated, 'hydration result was as expected')
					result = _result
					done()
				})
				.catch(done)
		})

		test(`writing corrected raw listing ${rawPath}`, function (done) {
			writeFile(
				rawPath,
				JSON.stringify(result.raw, null, '  '),
				// @ts-expect-error kava isn't typed
				done,
			)
		})

		test(`writing hydrated listing to ${hydratedPath}`, function (done) {
			writeFile(
				hydratedPath,
				JSON.stringify(result.hydrated, null, '  '),
				// @ts-expect-error kava isn't typed
				done,
			)
		})

		test(`writing corrected raw source listing ${rawSourcePath}`, function (done) {
			const rawData = JSON.stringify(result.raw, null, '  ')
			writeFile(
				rawSourcePath,
				[
					`import type { RawEntry } from './types.js'`,
					`const rawList: RawEntry[] = ${rawData}`,
					`export default rawList`,
					'',
				].join('\n'),
				// @ts-expect-error kava isn't typed
				done,
			)
		})

		test(`auto-formatting our project again`, function (done) {
			const p = spawnSync('npm', ['run', 'our:verify'], {
				cwd: root,
				stdio: 'inherit',
				// npm is npm.cmd on windows, which spawnSync cannot resolve without a shell
				shell: true,
			})
			// @ts-expect-error kava isn't typed
			done(p.error || null)
		})

		test('raw data was the same as the corrected data', function () {
			try {
				deepEqual(rawList, result.raw)
			} catch {
				console.warn(
					'there are fields within source/list.ts that can be truncated as they are now automated, please apply the relevant changes',
				)
			}
		})
	})
})
