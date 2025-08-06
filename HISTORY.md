# History

[See the git commit history for changes relating to the listing](https://github.com/bevry/staticsitegenerators/commits/master)

## v4.0.0 2025 August 7

- Updated the listing to ensure correct data
- Updated internal code for modern ecosystem requirements, mostly done automatically via [boundation](https://github.com/bevry/boundation)
- Updated dependencies, [base files](https://github.com/bevry/base), and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)
- Thank you to the sponsors: [Andrew Nesbitt](https://nesbitt.io), [Divinci](https://divinci.ai), [Mr. Henry](https://mrhenry.be), [Poonacha Medappa](https://poonachamedappa.com), [Roboflow](https://roboflow.com), [Square](https://github.com/square)

## v3.1.0 2020 May 11

- Updated dependencies

## v3.0.0 2018 November 28

- Converted to TypeScript
- Direct imports are now at `hydrated.json` and `raw.json`

## v2.0.0 2018 November 28

- New API that simply exports `hydrated` or `raw`
- New publishing setup, each commit that passes will be pushed to a new patch version, ensuring data is always up to date
- Updated [base files](https://github.com/bevry/base) and [editions](https://editions.bevry.me) using [boundation](https://github.com/bevry/boundation)

## v1.1.0 2018 February 15

- Updated dependencies

## v1.0.0 2017 February 22

- API is now `local`, `remote`, and `render`

## v0.2.1 2016 October 8

- No longer logs by default, before we defaulted `log` option to `console.log`
