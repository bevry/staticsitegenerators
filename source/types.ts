export type Is =
	/** A project that takes in local file content, renders it, and exposes the rendered contents via its own web server, without exporting to static files that can be deployment elsewhere, such as Grav and Harp */
	| 'flat file cms'
	/** A project that takes in local file content, renders it, and exports it into a static file content for deployment somewhere, with or without a bundled web server, such as Jekyll and DocPad */
	| 'static site generator'
	/** A project that takes in local or dynamic content and imports it into a database, such as a file system to Contentful importer */
	| 'static site importer'
	/** A project that takes in database content and generates a static website with it, such as a Contentful or Wordpress to static website exporter */
	| 'static site exporter'
	/** A project that hosts static site content, such as GitHub Pages or Surge.sh */
	| 'static site host'
	/** A project that a custom editing experience for static website content, such as Contentful and Prose.io, or even Grav's admin plugin */
	| 'static site editor'
	/** If some other type of project that is related to flat-file content management systems or static website generators */
	| 'other'

/**
 * Raw Entry
 * Dates should be in ISO format which looks like this `2006-08-18T16:00:00.000Z`. Conversion can be done with JavaScript using `console.log(new Date('19-Aug-2006').toISOString())` or via the command line using Node.js via `node -e "console.log(new Date('19-Aug-2006').toISOString())"`.
 *
 * If `github` is specified, the following fields should only be specified if GitHub's data is incorrect:
 * -   `license`
 * -   `website`
 * -   `language`
 * -   `description`
 * -   `created_at`
 * -   `updated_at`
 *
 * If `gitlab` is specified, the following fields should only be specified if GitLab's data is incorrect:
 * -   `language`
 * -   `description`
 * -   `created_at`
 * -   `updated_at`
 */
export interface RawEntry {
	[key: string]: unknown

	/** The project's name */
	name: string
	/** The slug of the GitHub repository if applicable */
	github?: string
	/** The slug of the GitLab repository if applicable */
	gitlab?: string
	/** The slug of BitBucket repository if applicable */
	bitbucket?: string
	/** The project's website if they have one, if the automatic website fetch is incorrect you can specify as `false` */
	website?: string | false
	/** The project type, required field for new entries  */
	is?: Is
	/** The project's primary programming language if applicable */
	language?: string
	/** The project's description */
	description?: string
	/** The project's date of creation in ISO format */
	created_at?: string
	/** The project's date of last update in ISO format */
	updated_at?: string
	/** Should be `true` or `false` providing whether or not the project provides a way for users to add new features */
	extensible?: boolean

	/** Can be `true` to signal that the project is no longer functioning or receiving support */
	defunct?: boolean

	/**
	 * The project's [SPDX license code](https://spdx.org/licenses/)
	 *
	 * -   if license is missing, omit this field
	 * -   if license is not applicable because it is a commercial service, use `false`
	 * -   if multiple licenses, see the [SPDX parser](https://www.npmjs.com/package/spdx) for formatting
	 */
	license?: string | false

	/**
	 * Whether or not the testing utility should verify the website is working
	 * Disable if our testing library is giving false negatives regarding the website.
	 */
	testWebsite?: boolean
}

export interface HydratedEntry extends RawEntry {
	/** The unique identifier of this entry */
	id: string
	/** How many people have starred this project on GitHub */
	stars?: number
	/** How many people have forked this project on GitHub */
	forks?: number
	/** How many people are watching this project on GitHub */
	watchers?: number
}
