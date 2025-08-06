import type { RawEntry, HydratedEntry } from './types.js'
import hydrated from '../hydrated.json'
import raw from '../raw.json'

/**
 * Get the hydrated list of static site generators with enhanced metadata from GitHub API.
 * @returns Array of hydrated entries with additional metadata like stars, forks, watchers
 */
export function getHydrated(): HydratedEntry[] {
	return hydrated
}

/**
 * Get the raw list of static site generators without additional GitHub metadata.
 * @returns Array of raw entries as originally defined in the data
 */
export function getRaw(): RawEntry[] {
	return raw
}
