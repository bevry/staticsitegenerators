/* eslint camelcase:0 */

// Imports
import { RawEntry, HydratedEntry } from './types.js' // eslint-disable-line
import naturalCompare from 'string-natural-compare' // eslint-disable-line
import { validateCredentials, getGitHubRepositories } from '@bevry/github-api' // eslint-disable-line
import arrangeKeys from 'arrangekeys' // eslint-disable-line
import crypto from 'node:crypto'

/** The preferred order of keys when arranging entry objects */
const keyorder =
	'id name github gitlab bitbucket website license language description created_at updated_at abandoned is extensible stars forks watchers'

/**
 * Sort an array of entries by name and then by GitHub repository name.
 * @param data The array of entries with name and optional github properties to sort
 * @returns Sorted array of entries
 */
function sort<T extends { name: string; github?: string }>(data: T[]) {
	return data.sort(
		(a, b) =>
			naturalCompare(a.name, b.name, {
				caseInsensitive: true,
			}) ||
			naturalCompare(a.github, b.github, {
				caseInsensitive: true,
			}),
	)
}

/**
 * Compare two values for case-insensitive equality, handling type coercion.
 * @param a The first value to compare
 * @param b The second value to compare
 * @returns True if the values are considered equal, false otherwise
 */
function same(a: unknown, b: unknown): boolean {
	const ta = typeof a,
		tb = typeof b
	if (ta === tb) {
		if (ta === 'string') {
			return (a as string).toLowerCase() === (b as string).toLowerCase()
		}
		return a === b
	}
	/* eslint eqeqeq:0 */
	return a == b
}

export interface HydrateOptions {
	/** Whether to perform corrective actions on the data */
	corrective?: boolean
	/** Cache duration in milliseconds */
	cache?: number
	/** Logging function that accepts a log level and arguments */
	log?: (logLevel: string, ...args: unknown[]) => void // eslint-disable-line
}

/** The result of the hydrate operation containing both raw and hydrated data */
export interface HydrateReturn {
	/** The raw entries after processing */
	raw: RawEntry[]
	/** The hydrated entries with additional GitHub metadata */
	hydrated: HydratedEntry[]
}

/**
 * Trim redundant data from the listing and enhance with GitHub API data.
 * @param data An array of raw entries to hydrate with GitHub metadata
 * @param opts Configuration options for the hydration process including corrective mode, cache duration, and logging function
 * @returns A promise resolving to both raw and hydrated entry arrays
 */
export async function hydrate(
	data: RawEntry[],
	opts: HydrateOptions = {},
): Promise<HydrateReturn> {
	validateCredentials()
	if (opts.corrective == null) opts.corrective = false
	if (opts.cache == null) opts.cache = 1000 * 60 * 60 * 24 // one day

	const rawMap: { [id: string]: RawEntry } = {}
	const hydratedMap: { [id: string]: HydratedEntry } = {}
	const githubRepos: string[] = []
	data.forEach(function (entry, index) {
		delete entry.id
		const key = (entry.github && entry.github.toLowerCase()) || index
		rawMap[key] = Object.assign({}, arrangeKeys(entry, keyorder))
		hydratedMap[key] = Object.assign(
			{
				id: crypto
					.createHash('md5')
					.update(
						JSON.stringify({
							name: entry.name,
							website: entry.website,
							github: entry.github,
						}),
					)
					.digest('hex'),
			},
			arrangeKeys(entry, keyorder),
		)
		if (entry.github) {
			githubRepos.push(entry.github)
		}
	})

	// Log
	if (opts.log) {
		opts.log(
			'info',
			`Fetching the github information, all ${githubRepos.length} of them`,
		)
	}

	// Enhance with github data
	const repos = await getGitHubRepositories(githubRepos)
	for (const github of repos) {
		// Prepare
		const key = github.full_name.toLowerCase()
		const raw = rawMap[key]
		const hydrated = hydratedMap[key]

		// Confirm existence as name may have changed from the listing, for example a repo rename
		if (raw == null) {
			if (opts.log) {
				opts.log('warn', `${github.full_name} is missing, likely due to rename`)
			}
			continue // skip
		}

		// Apply github fields
		const fields: Partial<HydratedEntry> = {
			description: github.description,
			language: github.language,
			license: github.license && github.license.key,
			website:
				github.homepage &&
				github.homepage.toLowerCase().includes(`github.com/${key}`) &&
				github.homepage,
			stars: github.stargazers_count,
			watchers: github.watchers_count,
			forks: github.forks_count,
			// @ts-expect-error typescript is wrong
			created_at: github.created_at,
			// @ts-expect-error typescript is wrong
			updated_at: github.updated_at,
		}
		for (const [key, value] of Object.entries(fields)) {
			const rawValue = raw[key]
			if (value) {
				if (opts.corrective && rawValue && value && same(rawValue, value)) {
					if (opts.log) {
						opts.log(
							'note',
							`trimming ${key} on ${github.full_name} as it is the same as the github data: ${value}`,
						)
					}
					delete raw[key] // eslint-disable-line
				}
				if (hydrated[key] == null) {
					if (opts.log) {
						opts.log(
							'info',
							`added ${key} on ${github.full_name} from the github data`,
						)
					}
					hydrated[key] = value
				}
			}
		}
		hydratedMap[key] = arrangeKeys(hydrated, keyorder)
	}

	return {
		hydrated: sort(Object.keys(hydratedMap).map((k) => hydratedMap[k])),
		raw: sort(Object.keys(rawMap).map((k) => rawMap[k])),
	}
}
