/* eslint-disable no-console */

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
	// timeout: 30 * 1000,
	redirect: 'error',
}

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
	if (milliseconds < 1000) {
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
		// @ts-expect-error RequestInit is not yet available to our types even though fetch is
		const response = await fetch(url, init)
		if (response.status === 429) {
			// wait a minute
			console.warn(
				`${url} returned 429, too many requests, trying again in a minute`,
			)
			await halt(60 * 1000)
			return fetcher(url, init)
		}
		return response
	} catch (error) {
		console.error(`Error fetching ${url}:`, error)
		return Promise.reject(error)
	}
}

/**
 * Check if a URL is accessible by making a HEAD request through a status checking service.
 * @param url The URL to check for accessibility
 * @returns A promise that resolves if the URL is accessible, rejects if not
 */
async function checkURL(url: string) {
	try {
		// use a response that caches heavily <-- no longer exists and I cannot find a backup
		// const u = new URL('https://status.bevry.workers.dev')
		// u.searchParams.set('url', url)
		// const res = await fetcher(u.toString(), fetchOptions)
		const res = await fetcher(url, fetchOptions)
		if (!res.ok) {
			equal(
				res.status,
				200,
				`checkURL: response http status code should be 200 success on ${url}`,
			)
		}
	} catch (err) {
		return Promise.reject(err)
	}
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

	suite('uris are valid / still exist', function (suite, test) {
		// @ts-expect-error kava isn't typed
		this.setConfig({ concurrency: 50 })
		rawList.forEach(function ({ name, github, website, testWebsite }) {
			if (github) {
				github = `https://github.com/${github}`
				test(`${name}: http get github: ${github}`, function (done) {
					checkURL(github as string)
						.then(() => done())
						.catch(done)
				})
			}
			if (website && testWebsite !== false) {
				test(`${name}: http get website: ${website}`, function (done) {
					checkURL(website)
						.then(() => done())
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
