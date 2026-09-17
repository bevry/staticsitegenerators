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

const oneSecond = 1000
const thirtySeconds = oneSecond * 30

/** This should be adapted based on what we learn on what a platform supports before it hits issues. */
const requestConcurrency = 30

/**
 * How long until our overall request deadline fires, via `AbortSignal.timeout`, covering every phase of the fetch: connection, request, response headers, and body.
 * Without this a host that accepts the connection and then stalls, which stalls the suite concurrency, as the built-in fetch has no overall deadline of its own.
 *
 * Timeouts can also occur earlier within the connection phase itself, which have their own much shorter timeouts (e.g. Node's ~250ms per-address connect timeout when a host resolves to multiple addresses), surfacing as `ETIMEDOUT` / `UND_ERR_CONNECT_TIMEOUT` well before this deadline — see `isRequestTimeout` and `isRequestConnectTimeout` for how the two are told apart.
 */
const requestTimeout = thirtySeconds

/**
 * How long to wait before the first retry of a failed request (timeout or non-429 failure status).
 * For each retry, it is doubled.
 * This should be twice the timeout, because if it struggled to respond in time of the timeout, it is unlikely it will respond in time to another request.
 */
const requestRetryDelay = requestTimeout * 2

/** How many times to retry a failed URL before failing tit */
const retries = 3

/**
 * Convert milliseconds into human seconds
 * @param milliseconds The number of milliseconds to convert
 * @returns The human readable seconds string
 */
function toHumanSeconds(milliseconds: number) {
	return `${(milliseconds / 1000).toFixed(1)} seconds`
}

/**
 * Convert a milliseconds delta into human time
 * @param milliseconds The number of milliseconds of the delta
 * @returns The human readable time string
 */
function toDeltaTime(milliseconds: number) {
	return new Date(Date.now() + milliseconds).toLocaleTimeString()
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
 * Output log segments with consistent separator
 * @param segments The log segments to join
 * @returns The joined log segments string
 */
function joinLogSegments(...segments: string[]) {
	return segments.filter((i) => i.length !== 0).join(' | ')
}

/**
 * Deduplicate values, preserving order of first appearance
 * @param values The values to deduplicate
 * @returns The deduplicated values
 */
function dedupe<T>(values: T[]): T[] {
	return [...new Set(values)]
}

/**
 * Calculate milliseconds from this Date
 * @param from The Date or timestamp to calculate the delta from
 * @returns The number of milliseconds since the given date
 */
function millisecondsDelta(from: Date | number) {
	if (from instanceof Date) {
		from = from.getTime()
	}
	return Date.now() - from
}

/**
 * Collect the `code` properties from an error, its `cause` chain, and any AggregateError members
 * @param error The error to collect the codes from
 * @returns The collected error codes
 */
function getErrorCodes(error: unknown): string[] {
	if (!error || typeof error !== 'object') {
		return []
	}
	const codes: string[] = []
	const code = (error as { code?: unknown }).code
	if (typeof code === 'string') {
		codes.push(code)
	}
	const cause = (error as { cause?: unknown }).cause
	if (cause) {
		codes.push(...getErrorCodes(cause))
	}
	const errors = (error as { errors?: unknown }).errors
	if (Array.isArray(errors)) {
		for (const inner of errors) {
			codes.push(...getErrorCodes(inner))
		}
	}
	return codes
}

/**
 * Did our overall request deadline fire? (via `AbortSignal.timeout`, covering every fetch phase)
 * @param error The error to check
 * @returns Whether the error indicates a request timeout
 */
function isRequestTimeout(error: unknown): boolean {
	const name = (error as { name?: string } | null)?.name
	return name === 'TimeoutError' || name === 'AbortError'
}

/**
 * Did the connection phase itself fail? (kernel connect timeouts like a dropped SYN or unroutable IPv6, or undici's own connect timeout)
 * @param error The error to check
 * @returns Whether the error indicates a connect timeout
 */
function isRequestConnectTimeout(error: unknown): boolean {
	return getErrorCodes(error).some(
		(code) => code === 'ETIMEDOUT' || code === 'UND_ERR_CONNECT_TIMEOUT',
	)
}

/**
 * Fetch a URL handling retries for timeouts, 429 too many requests, rate limits.
 * @param url The URL to fetch
 * @param attempt The attempt to start one, must be less than {@link retries}
 * @returns A promise that resolves to the fetch {@link Response}
 */
export async function fetcher(url: string, attempt = 1): Promise<Response> {
	let response: Response | null = null,
		responseError: unknown = null
	const attemptSegments: string[] = [url, `attempt ${attempt} of ${retries}`]
	const attemptStart = Date.now()
	try {
		response = await fetch(url, {
			// `timeout` is for node fetch, that native fetch does not use
			// `signal` is the native fetch implementation, a fresh signal for each attempt, as a fired one cannot be reused
			signal: AbortSignal.timeout(requestTimeout),
		})
		if (response?.ok) {
			if (attempt > 1) {
				const attemptDelta = millisecondsDelta(attemptStart)
				attemptSegments.push(
					`duration ${toHumanSeconds(attemptDelta)}`,
					'successful',
				)
				console.info(joinLogSegments(...attemptSegments))
			}
			return response // success case, return
		}
	} catch (error) {
		responseError = error
	}
	const attemptDelta = millisecondsDelta(attemptStart)
	const responseStatus = response?.status
	const responseCode = dedupe(getErrorCodes(responseError)).join(', ')
	attemptSegments.push(
		`duration ${toHumanSeconds(attemptDelta)}`,
		responseStatus ? `status ${responseStatus}` : '',
		responseCode ? `code ${responseCode}` : '',
	)
	if (responseStatus === 429) {
		attemptSegments.push('too many requests')
	}
	if (isRequestTimeout(responseError)) {
		// our overall deadline fired, so it genuinely took this long
		attemptSegments.push(`timed out after ${toHumanSeconds(requestTimeout)}`)
	} else if (isRequestConnectTimeout(responseError)) {
		// the connection phase failed well before our deadline, hence the measured duration
		attemptSegments.push(
			`connect timed out after ${toHumanSeconds(attemptDelta)}`,
		)
	}
	attemptSegments.push(responseError ? `error: ${String(responseError)}` : '')
	if (attempt < retries) {
		const attemptRetryDelay = requestRetryDelay * 2 * attempt
		attemptSegments.push(
			`retrying in ${toHumanSeconds(attemptRetryDelay)} at ${toDeltaTime(attemptRetryDelay)}`,
		)
		console.warn(joinLogSegments(...attemptSegments))
		await halt(attemptRetryDelay)
		return await fetcher(url, attempt + 1)
	} else if (responseError) {
		return Promise.reject(
			new Error(joinLogSegments(...attemptSegments), responseError),
		)
	} else {
		return Promise.reject(new Error(joinLogSegments(...attemptSegments)))
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
					joinLogSegments(
						name,
						`license ${license}`,
						`not a valid SPDX identifier from http://spdx.org/licenses/`,
					),
				)
			}
		})
	})

	// This suite requires every third-party repository and website in the listing
	// to be reachable, on every os in the matrix, and because `publish` declares
	// `needs: test`, an outage anywhere also blocks the deploy. This is intentional.
	suite('uris are valid / still exist', function (suite, test) {
		// @ts-expect-error kava isn't typed
		this.setConfig({ concurrency: requestConcurrency }) // eslint-disable-line
		rawList.forEach(function ({ name, github, website, testWebsite }) {
			if (github) {
				const githubUrl = `https://github.com/${github}`
				test(
					joinLogSegments(name, 'http get github', githubUrl),
					function (done) {
						fetcher(githubUrl)
							.then(() => {
								done()
							})
							.catch(done)
					},
				)
			}
			if (website && testWebsite !== false) {
				test(
					joinLogSegments(name, 'http get website', website),
					function (done) {
						fetcher(website)
							.then(() => {
								done()
							})
							.catch(done)
					},
				)
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
