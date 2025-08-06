<!-- TITLE/ -->

# Static Site Generators Listing

<!-- /TITLE -->

<!-- BADGES/ -->

<span class="badge-githubworkflow"><a href="https://github.com/bevry/staticsitegenerators/actions?query=workflow%3Abevry" title="View the status of this project's GitHub Workflow: bevry"><img src="https://github.com/bevry/staticsitegenerators/workflows/bevry/badge.svg" alt="Status of the GitHub Workflow: bevry" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/staticsitegenerators" title="View this project on NPM"><img src="https://img.shields.io/npm/v/staticsitegenerators.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/staticsitegenerators" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/staticsitegenerators.svg" alt="NPM downloads" /></a></span>
<br class="badge-separator" />
<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-thanksdev"><a href="https://thanks.dev/u/gh/bevry" title="Donate to this project using ThanksDev"><img src="https://img.shields.io/badge/thanksdev-donate-yellow.svg" alt="ThanksDev donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<br class="badge-separator" />
<span class="badge-discord"><a href="https://discord.gg/nQuXddV7VP" title="Join this project's community on Discord"><img src="https://img.shields.io/discord/1147436445783560193?logo=discord&amp;label=discord" alt="Discord server badge" /></a></span>
<span class="badge-twitch"><a href="https://www.twitch.tv/balupton" title="Join this project's community on Twitch"><img src="https://img.shields.io/twitch/status/balupton?logo=twitch" alt="Twitch community badge" /></a></span>

<!-- /BADGES -->

<!-- DESCRIPTION/ -->

A comprehensive, partially automatically generated comparison of static site generators with some minimal meta data about them

<!-- /DESCRIPTION -->


- [View the source listing](https://github.com/bevry/staticsitegenerators/blob/master/source/list.ts) | [Edit the source listing](https://github.com/bevry/staticsitegenerators/edit/master/source/list.ts)
- [View the raw JSON listing](https://staticsitegenerators.bevry.me/raw.json)
- [View the rendered JSON listing](https://staticsitegenerators.bevry.me/list.json)
- [View the website](https://staticsitegenerators.bevry.me)

## Contributing

### Requirements

There are generally three types of Content Management Systems:

1. Dynamic Servers (e.g. WordPress, Ghost, DocPad, Harp) — these allow you to have re-render on every request abilities
2. Flat File Content Management Systems (e.g. Yellow, Techy) — these allow you to write your content as files
3. Static Site Generators (e.g. Jekyll, DocPad) — these generate a static website from your input that you can deploy anywhere

Currently, this listing is only for projects that relate to Flat File Content Management Systems and/or Static Site Generators, but not for projects which relate only to Dynamic Servers (such as WordPress and Ghost).

### Adding

Entries are stored within the [`source/list.ts` file](https://github.com/bevry/staticsitegenerators/blob/master/source/list.ts).

Entries must conform to the [`RawEntry` type](http://master.staticsitegenerators.bevry.surge.sh/docs/interfaces/rawentry).

### Testing

When you submit your pull request, your submission will be automatically tested, so no need to test locally, however if you do wish to, you can:

1. Install [Node.js](https://learn.bevry.me/node/install) (5-15 minutes)

1. Fork the project and clone your fork - [guide](https://help.github.com/articles/fork-a-repo/) (5 minutes)

1. Install local dependencies (1 minute)

    ```bash
    npm install
    ```

1. Running the tests (1 minute)

    ```bash
    npm test
    ```

1. Make any changes that the tests indicate, commit your changes, and submit

## Usage

[Complete API Documentation.](http://master.staticsitegenerators.bevry.surge.sh/docs/)

Using the npm package is done like so:

```javascript
import { hydrated, raw } from 'staticsitegenerators'

// get the hydrated data
console.log(listing.hydrated)

// get the raw data
console.log(listing.raw)
```

<!-- HISTORY/ -->

## History

[Discover the release history by heading on over to the `HISTORY.md` file.](https://github.com/bevry/staticsitegenerators/blob/HEAD/HISTORY.md#files)

<!-- /HISTORY -->

<!-- BACKERS/ -->

## Backers

### Code

[Discover how to contribute via the `CONTRIBUTING.md` file.](https://github.com/bevry/staticsitegenerators/blob/HEAD/CONTRIBUTING.md#files)

#### Authors

-   2013+ [Benjamin Lupton](https://balupton.com) — Accelerating collaborative wisdom.
-   2013 [Jasper Van der Jeugt](https://jaspervdj.be) — Haskell programmer.  I like to make things.

#### Maintainers

-   [Benjamin Lupton](https://balupton.com) — Accelerating collaborative wisdom.
-   [Craig Davison](https://davison.io)
-   [Cthulhux](https://code.rosaelefanten.org) — Creator of weird utilities, knower of things. Hates Git.
-   [Manvel Saroyan](https://manvel.me) — Currently @bardeenai, @Privacy-Managers, @cmints and @browser-automation, previously @adblockplus.

#### Contributors

-   [0](https://github.com/harijsm) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=harijsm "View the GitHub contributions of 0 on repository bevry/staticsitegenerators")
-   [Abhishek Choudhary](https://github.com/theabbie) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=theabbie "View the GitHub contributions of Abhishek Choudhary on repository bevry/staticsitegenerators")
-   [Adam Bien](https://github.com/AdamBien) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=AdamBien "View the GitHub contributions of Adam Bien on repository bevry/staticsitegenerators")
-   [Adrian Emil Grigore](https://github.com/adriangrigore) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=adriangrigore "View the GitHub contributions of Adrian Emil Grigore on repository bevry/staticsitegenerators")
-   [Adrien Beudin](https://github.com/beudbeud) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=beudbeud "View the GitHub contributions of Adrien Beudin on repository bevry/staticsitegenerators")
-   [ahorn42](https://github.com/ahorn42) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=ahorn42 "View the GitHub contributions of ahorn42 on repository bevry/staticsitegenerators")
-   [Ale Muñoz](https://github.com/bomberstudios) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=bomberstudios "View the GitHub contributions of Ale Muñoz on repository bevry/staticsitegenerators")
-   [Alexander](https://github.com/xy2z) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=xy2z "View the GitHub contributions of Alexander on repository bevry/staticsitegenerators")
-   [Alexander Elias](https://github.com/xeaone) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=xeaone "View the GitHub contributions of Alexander Elias on repository bevry/staticsitegenerators")
-   [Alexandre Chopin](https://github.com/alexchopin) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=alexchopin "View the GitHub contributions of Alexandre Chopin on repository bevry/staticsitegenerators")
-   [Alexandre Grison](https://github.com/agrison) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=agrison "View the GitHub contributions of Alexandre Grison on repository bevry/staticsitegenerators")
-   [Alexey Kinev](https://github.com/rudyryk) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=rudyryk "View the GitHub contributions of Alexey Kinev on repository bevry/staticsitegenerators")
-   [Álex González](https://github.com/agonzalezro) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=agonzalezro "View the GitHub contributions of Álex González on repository bevry/staticsitegenerators")
-   [Alex Hoyau](https://github.com/lexoyo) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=lexoyo "View the GitHub contributions of Alex Hoyau on repository bevry/staticsitegenerators")
-   [Alex Lin](https://github.com/opoo) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=opoo "View the GitHub contributions of Alex Lin on repository bevry/staticsitegenerators")
-   [Alex Thompson](https://github.com/pierogitus) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=pierogitus "View the GitHub contributions of Alex Thompson on repository bevry/staticsitegenerators")
-   [Andrew_Mallis](https://github.com/andrewmallis) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=andrewmallis "View the GitHub contributions of Andrew_Mallis on repository bevry/staticsitegenerators")
-   [Andrew Murray](https://github.com/andrewjamesmurray) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=andrewjamesmurray "View the GitHub contributions of Andrew Murray on repository bevry/staticsitegenerators")
-   [Andy Miller](https://github.com/rhukster) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=rhukster "View the GitHub contributions of Andy Miller on repository bevry/staticsitegenerators")
-   [Ankush Gupta](https://github.com/ankushg) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=ankushg "View the GitHub contributions of Ankush Gupta on repository bevry/staticsitegenerators")
-   [Anthonny Quérouil](https://github.com/anthonny) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=anthonny "View the GitHub contributions of Anthonny Quérouil on repository bevry/staticsitegenerators")
-   [anton](https://github.com/podviaznikov) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=podviaznikov "View the GitHub contributions of anton on repository bevry/staticsitegenerators")
-   [Anton Iarchuk](https://github.com/anton-iarchuk-sysgears) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=anton-iarchuk-sysgears "View the GitHub contributions of Anton Iarchuk on repository bevry/staticsitegenerators")
-   [Arnaud Ligny](https://github.com/ArnaudLigny) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=ArnaudLigny "View the GitHub contributions of Arnaud Ligny on repository bevry/staticsitegenerators")
-   [Artem Krylysov](https://github.com/akrylysov) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=akrylysov "View the GitHub contributions of Artem Krylysov on repository bevry/staticsitegenerators")
-   [Átila Camurça Alves](https://github.com/atilacamurca) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=atilacamurca "View the GitHub contributions of Átila Camurça Alves on repository bevry/staticsitegenerators")
-   [Austin Lee](https://github.com/lizheming) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=lizheming "View the GitHub contributions of Austin Lee on repository bevry/staticsitegenerators")
-   [Barry Clark](https://github.com/barryclark) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=barryclark "View the GitHub contributions of Barry Clark on repository bevry/staticsitegenerators")
-   [Basil Peace](https://github.com/grv87) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=grv87 "View the GitHub contributions of Basil Peace on repository bevry/staticsitegenerators")
-   [Bastian Venthur](https://github.com/venthur) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=venthur "View the GitHub contributions of Bastian Venthur on repository bevry/staticsitegenerators")
-   [Benjamin Henrion](https://github.com/zoobab) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=zoobab "View the GitHub contributions of Benjamin Henrion on repository bevry/staticsitegenerators")
-   [Benjamin Lupton](https://github.com/balupton) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=balupton "View the GitHub contributions of Benjamin Lupton on repository bevry/staticsitegenerators")
-   [bhuztez](https://github.com/bhuztez) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=bhuztez "View the GitHub contributions of bhuztez on repository bevry/staticsitegenerators")
-   [Bill Humphries](https://github.com/whump) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=whump "View the GitHub contributions of Bill Humphries on repository bevry/staticsitegenerators")
-   [Bosco Ho](https://github.com/boscoh) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=boscoh "View the GitHub contributions of Bosco Ho on repository bevry/staticsitegenerators")
-   [cadars](https://github.com/cadars) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=cadars "View the GitHub contributions of cadars on repository bevry/staticsitegenerators")
-   [caixw](https://github.com/caixw) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=caixw "View the GitHub contributions of caixw on repository bevry/staticsitegenerators")
-   [Casey Brooks](https://github.com/cjbrooks12) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=cjbrooks12 "View the GitHub contributions of Casey Brooks on repository bevry/staticsitegenerators")
-   [C Brown](https://github.com/colynb) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=colynb "View the GitHub contributions of C Brown on repository bevry/staticsitegenerators")
-   [Charles E. Lehner](https://github.com/clehner) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=clehner "View the GitHub contributions of Charles E. Lehner on repository bevry/staticsitegenerators")
-   [Chris Dawson](https://github.com/xrd) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=xrd "View the GitHub contributions of Chris Dawson on repository bevry/staticsitegenerators")
-   [Chris Warrick](https://github.com/Kwpolska) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=Kwpolska "View the GitHub contributions of Chris Warrick on repository bevry/staticsitegenerators")
-   [CJex](https://github.com/CJex) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=CJex "View the GitHub contributions of CJex on repository bevry/staticsitegenerators")
-   [Cody Scott](https://github.com/Siecje) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=Siecje "View the GitHub contributions of Cody Scott on repository bevry/staticsitegenerators")
-   [Colin Chan](https://github.com/kalgynirae) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=kalgynirae "View the GitHub contributions of Colin Chan on repository bevry/staticsitegenerators")
-   [Craig Davison](https://github.com/davisonio) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=davisonio "View the GitHub contributions of Craig Davison on repository bevry/staticsitegenerators")
-   [Cthulhux](https://github.com/dertuxmalwieder) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=dertuxmalwieder "View the GitHub contributions of Cthulhux on repository bevry/staticsitegenerators")
-   [Dario Castañé](https://github.com/darccio) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=darccio "View the GitHub contributions of Dario Castañé on repository bevry/staticsitegenerators")
-   [Dave Glick](https://github.com/daveaglick) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=daveaglick "View the GitHub contributions of Dave Glick on repository bevry/staticsitegenerators")
-   [Dave Snider](https://github.com/snide) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=snide "View the GitHub contributions of Dave Snider on repository bevry/staticsitegenerators")
-   [David Caldwell](https://github.com/caldwell) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=caldwell "View the GitHub contributions of David Caldwell on repository bevry/staticsitegenerators")
-   [David Eads](https://github.com/eads) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=eads "View the GitHub contributions of David Eads on repository bevry/staticsitegenerators")
-   [David Herron](https://github.com/robogeek) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=robogeek "View the GitHub contributions of David Herron on repository bevry/staticsitegenerators")
-   [David Pennington](https://github.com/xeoncross) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=xeoncross "View the GitHub contributions of David Pennington on repository bevry/staticsitegenerators")
-   [David Siaw](https://github.com/davidsiaw) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=davidsiaw "View the GitHub contributions of David Siaw on repository bevry/staticsitegenerators")
-   [D. Bohdan](https://github.com/dbohdan) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=dbohdan "View the GitHub contributions of D. Bohdan on repository bevry/staticsitegenerators")
-   [Declan Chidlow](https://github.com/DeclanChidlow) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=DeclanChidlow "View the GitHub contributions of Declan Chidlow on repository bevry/staticsitegenerators")
-   [Denis](https://github.com/denisftw) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=denisftw "View the GitHub contributions of Denis on repository bevry/staticsitegenerators")
-   [Denis Bernard](https://github.com/deber) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=deber "View the GitHub contributions of Denis Bernard on repository bevry/staticsitegenerators")
-   [Denis Defreyne](https://github.com/denisdefreyne) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=denisdefreyne "View the GitHub contributions of Denis Defreyne on repository bevry/staticsitegenerators")
-   [Denis Defreyne](https://github.com/denis-soundcloud) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=denis-soundcloud "View the GitHub contributions of Denis Defreyne on repository bevry/staticsitegenerators")
-   [Doug Bell](https://github.com/preaction) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=preaction "View the GitHub contributions of Doug Bell on repository bevry/staticsitegenerators")
-   [Eric Alli](https://github.com/ericalli) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=ericalli "View the GitHub contributions of Eric Alli on repository bevry/staticsitegenerators")
-   [Evan Mattson](https://github.com/aaemnnosttv) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=aaemnnosttv "View the GitHub contributions of Evan Mattson on repository bevry/staticsitegenerators")
-   [Evan Sonderegger](https://github.com/esonderegger) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=esonderegger "View the GitHub contributions of Evan Sonderegger on repository bevry/staticsitegenerators")
-   [farvardin](https://github.com/farvardin) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=farvardin "View the GitHub contributions of farvardin on repository bevry/staticsitegenerators")
-   [feinstaub](https://github.com/feinstaub) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=feinstaub "View the GitHub contributions of feinstaub on repository bevry/staticsitegenerators")
-   [fiatjaf_](https://github.com/fiatjaf) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=fiatjaf "View the GitHub contributions of fiatjaf_ on repository bevry/staticsitegenerators")
-   [F. Malina](https://github.com/fmalina) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=fmalina "View the GitHub contributions of F. Malina on repository bevry/staticsitegenerators")
-   [Francisco Presencia](https://github.com/franciscop) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=franciscop "View the GitHub contributions of Francisco Presencia on repository bevry/staticsitegenerators")
-   [Gabi Nagy](https://github.com/g4b1nagy) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=g4b1nagy "View the GitHub contributions of Gabi Nagy on repository bevry/staticsitegenerators")
-   [Guido Flohr](https://github.com/gflohr) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=gflohr "View the GitHub contributions of Guido Flohr on repository bevry/staticsitegenerators")
-   [Hasnain Lakhani](https://github.com/mhlakhani) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=mhlakhani "View the GitHub contributions of Hasnain Lakhani on repository bevry/staticsitegenerators")
-   [Hugh Brown](https://github.com/saintaardvark) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=saintaardvark "View the GitHub contributions of Hugh Brown on repository bevry/staticsitegenerators")
-   [Ian Sullivan](https://github.com/iansullivan88) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=iansullivan88 "View the GitHub contributions of Ian Sullivan on repository bevry/staticsitegenerators")
-   [ipavl](https://github.com/ipavl) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=ipavl "View the GitHub contributions of ipavl on repository bevry/staticsitegenerators")
-   [Iván Ávalos](https://github.com/ivan-avalos) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=ivan-avalos "View the GitHub contributions of Iván Ávalos on repository bevry/staticsitegenerators")
-   [Ivan Melnikov](https://github.com/melnikov-ivan) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=melnikov-ivan "View the GitHub contributions of Ivan Melnikov on repository bevry/staticsitegenerators")
-   [Jack Hill](https://github.com/jackhill) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=jackhill "View the GitHub contributions of Jack Hill on repository bevry/staticsitegenerators")
-   [Jakub Neander](https://github.com/zaiste) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=zaiste "View the GitHub contributions of Jakub Neander on repository bevry/staticsitegenerators")
-   [James](https://github.com/capjamesg) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=capjamesg "View the GitHub contributions of James on repository bevry/staticsitegenerators")
-   [jandecaluwe](https://github.com/jandecaluwe) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=jandecaluwe "View the GitHub contributions of jandecaluwe on repository bevry/staticsitegenerators")
-   [Jan Pecha](https://github.com/janpecha) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=janpecha "View the GitHub contributions of Jan Pecha on repository bevry/staticsitegenerators")
-   [Japh](https://github.com/Japh) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=Japh "View the GitHub contributions of Japh on repository bevry/staticsitegenerators")
-   [Jasper Van der Jeugt](https://github.com/jaspervdj) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=jaspervdj "View the GitHub contributions of Jasper Van der Jeugt on repository bevry/staticsitegenerators")
-   [Jeffrey Hicks](https://github.com/wikismith) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=wikismith "View the GitHub contributions of Jeffrey Hicks on repository bevry/staticsitegenerators")
-   [Jeremy Weinstein](https://github.com/jeremydw) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=jeremydw "View the GitHub contributions of Jeremy Weinstein on repository bevry/staticsitegenerators")
-   [Jim Campbell](https://github.com/j1mc) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=j1mc "View the GitHub contributions of Jim Campbell on repository bevry/staticsitegenerators")
-   [Johanna](https://github.com/0xxon) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=0xxon "View the GitHub contributions of Johanna on repository bevry/staticsitegenerators")
-   [Johannes Boyne](https://github.com/johannesboyne) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=johannesboyne "View the GitHub contributions of Johannes Boyne on repository bevry/staticsitegenerators")
-   [John SJ Anderson](https://github.com/genehack) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=genehack "View the GitHub contributions of John SJ Anderson on repository bevry/staticsitegenerators")
-   [John Tait](https://github.com/johngtait) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=johngtait "View the GitHub contributions of John Tait on repository bevry/staticsitegenerators")
-   [Jonathan Bullock](https://github.com/jonbullock) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=jonbullock "View the GitHub contributions of Jonathan Bullock on repository bevry/staticsitegenerators")
-   [Jonathan Foucher](https://github.com/jfoucher) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=jfoucher "View the GitHub contributions of Jonathan Foucher on repository bevry/staticsitegenerators")
-   [Jon Schlinkert](https://github.com/jonschlinkert) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=jonschlinkert "View the GitHub contributions of Jon Schlinkert on repository bevry/staticsitegenerators")
-   [Jorge Epuñan](https://github.com/juanbrujo) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=juanbrujo "View the GitHub contributions of Jorge Epuñan on repository bevry/staticsitegenerators")
-   [Joshua Lloyd](https://github.com/joshualloyd) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=joshualloyd "View the GitHub contributions of Joshua Lloyd on repository bevry/staticsitegenerators")
-   [Juho Vepsäläinen](https://github.com/bebraw) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=bebraw "View the GitHub contributions of Juho Vepsäläinen on repository bevry/staticsitegenerators")
-   [Julian.io](https://github.com/juliancwirko) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=juliancwirko "View the GitHub contributions of Julian.io on repository bevry/staticsitegenerators")
-   [Kai Hendry](https://github.com/kaihendry) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=kaihendry "View the GitHub contributions of Kai Hendry on repository bevry/staticsitegenerators")
-   [kangulardev](https://github.com/kangulardev) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=kangulardev "View the GitHub contributions of kangulardev on repository bevry/staticsitegenerators")
-   [Karl Voit](https://github.com/novoid) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=novoid "View the GitHub contributions of Karl Voit on repository bevry/staticsitegenerators")
-   [Klaus Mueller](https://github.com/klml) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=klml "View the GitHub contributions of Klaus Mueller on repository bevry/staticsitegenerators")
-   [Klaus Purer](https://github.com/klausi) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=klausi "View the GitHub contributions of Klaus Purer on repository bevry/staticsitegenerators")
-   [Koen Bok](https://github.com/koenbok) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=koenbok "View the GitHub contributions of Koen Bok on repository bevry/staticsitegenerators")
-   [Konstantin Tarkus](https://github.com/koistya) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=koistya "View the GitHub contributions of Konstantin Tarkus on repository bevry/staticsitegenerators")
-   [koutsie](https://github.com/koutsie) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=koutsie "View the GitHub contributions of koutsie on repository bevry/staticsitegenerators")
-   [Kushal Das](https://github.com/kushaldas) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=kushaldas "View the GitHub contributions of Kushal Das on repository bevry/staticsitegenerators")
-   [Lance R. Vick](https://github.com/lrvick) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=lrvick "View the GitHub contributions of Lance R. Vick on repository bevry/staticsitegenerators")
-   [lecnim](https://github.com/lecnim) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=lecnim "View the GitHub contributions of lecnim on repository bevry/staticsitegenerators")
-   [Leo Lamprecht](https://github.com/leo) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=leo "View the GitHub contributions of Leo Lamprecht on repository bevry/staticsitegenerators")
-   [Leon Stafford](https://github.com/leonstafford) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=leonstafford "View the GitHub contributions of Leon Stafford on repository bevry/staticsitegenerators")
-   [Lomig Lavnek](https://github.com/LomigLavnek) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=LomigLavnek "View the GitHub contributions of Lomig Lavnek on repository bevry/staticsitegenerators")
-   [Lutz Roeder](https://github.com/lutzroeder) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=lutzroeder "View the GitHub contributions of Lutz Roeder on repository bevry/staticsitegenerators")
-   [Magnar Sveen](https://github.com/magnars) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=magnars "View the GitHub contributions of Magnar Sveen on repository bevry/staticsitegenerators")
-   [Manu Zhang](https://github.com/manuzhang) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=manuzhang "View the GitHub contributions of Manu Zhang on repository bevry/staticsitegenerators")
-   [Manvel Saroyan](https://github.com/Manvel) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=Manvel "View the GitHub contributions of Manvel Saroyan on repository bevry/staticsitegenerators")
-   [Marc](https://github.com/pachacamac) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=pachacamac "View the GitHub contributions of Marc on repository bevry/staticsitegenerators")
-   [Mark Benson](https://github.com/markdbenson) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=markdbenson "View the GitHub contributions of Mark Benson on repository bevry/staticsitegenerators")
-   [Mark Moffat](https://github.com/mrvautin) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=mrvautin "View the GitHub contributions of Mark Moffat on repository bevry/staticsitegenerators")
-   [Markus Fisch](https://github.com/markusfisch) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=markusfisch "View the GitHub contributions of Markus Fisch on repository bevry/staticsitegenerators")
-   [Martin](https://github.com/kambrium) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=kambrium "View the GitHub contributions of Martin on repository bevry/staticsitegenerators")
-   [Martin Angers](https://github.com/mna) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=mna "View the GitHub contributions of Martin Angers on repository bevry/staticsitegenerators")
-   [Masayuki Matsuki](https://github.com/Songmu) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=Songmu "View the GitHub contributions of Masayuki Matsuki on repository bevry/staticsitegenerators")
-   [Mathias Wulff](https://github.com/mathiasrw) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=mathiasrw "View the GitHub contributions of Mathias Wulff on repository bevry/staticsitegenerators")
-   [Matt Buck](https://github.com/techpeace) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=techpeace "View the GitHub contributions of Matt Buck on repository bevry/staticsitegenerators")
-   [Matthäus G. Chajdas](https://github.com/Anteru) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=Anteru "View the GitHub contributions of Matthäus G. Chajdas on repository bevry/staticsitegenerators")
-   [Matthias Bethke](https://github.com/mbethke) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=mbethke "View the GitHub contributions of Matthias Bethke on repository bevry/staticsitegenerators")
-   [Matthieu Vion](https://github.com/magentix) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=magentix "View the GitHub contributions of Matthieu Vion on repository bevry/staticsitegenerators")
-   [Mattie B.](https://github.com/mattieb) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=mattieb "View the GitHub contributions of Mattie B. on repository bevry/staticsitegenerators")
-   [Matt Layman](https://github.com/mblayman) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=mblayman "View the GitHub contributions of Matt Layman on repository bevry/staticsitegenerators")
-   [mattn](https://github.com/mattn) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=mattn "View the GitHub contributions of mattn on repository bevry/staticsitegenerators")
-   [Max](https://github.com/MoOx) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=MoOx "View the GitHub contributions of Max on repository bevry/staticsitegenerators")
-   [M G Berberich](https://github.com/berberic2) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=berberic2 "View the GitHub contributions of M G Berberich on repository bevry/staticsitegenerators")
-   [Michael Bleigh](https://github.com/mbleigh) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=mbleigh "View the GitHub contributions of Michael Bleigh on repository bevry/staticsitegenerators")
-   [Michael F. Lamb](https://github.com/datagrok) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=datagrok "View the GitHub contributions of Michael F. Lamb on repository bevry/staticsitegenerators")
-   [Michał Ordon](https://github.com/designorant) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=designorant "View the GitHub contributions of Michał Ordon on repository bevry/staticsitegenerators")
-   [Mike Kreuzer](https://github.com/mikekreuzer) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=mikekreuzer "View the GitHub contributions of Mike Kreuzer on repository bevry/staticsitegenerators")
-   [Mike Mitterer](https://github.com/MikeMitterer) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=MikeMitterer "View the GitHub contributions of Mike Mitterer on repository bevry/staticsitegenerators")
-   [Mikito Takada](https://github.com/mixu) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=mixu "View the GitHub contributions of Mikito Takada on repository bevry/staticsitegenerators")
-   [MinchinWeb](https://github.com/minchinweb) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=minchinweb "View the GitHub contributions of MinchinWeb on repository bevry/staticsitegenerators")
-   [Mocy](https://github.com/ranmocy) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=ranmocy "View the GitHub contributions of Mocy on repository bevry/staticsitegenerators")
-   [Niels de Hoog](https://github.com/njdehoog) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=njdehoog "View the GitHub contributions of Niels de Hoog on repository bevry/staticsitegenerators")
-   [nodiscc](https://github.com/nodiscc) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=nodiscc "View the GitHub contributions of nodiscc on repository bevry/staticsitegenerators")
-   [Oben Sonne](https://github.com/obensonne) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=obensonne "View the GitHub contributions of Oben Sonne on repository bevry/staticsitegenerators")
-   [Olivier DOSSMANN](https://github.com/blankoworld) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=blankoworld "View the GitHub contributions of Olivier DOSSMANN on repository bevry/staticsitegenerators")
-   [Óscar Otero](https://github.com/oscarotero) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=oscarotero "View the GitHub contributions of Óscar Otero on repository bevry/staticsitegenerators")
-   [Oz Tiram](https://github.com/oz123) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=oz123 "View the GitHub contributions of Oz Tiram on repository bevry/staticsitegenerators")
-   [packetrhino](https://github.com/packetrhino) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=packetrhino "View the GitHub contributions of packetrhino on repository bevry/staticsitegenerators")
-   [partageit](https://github.com/partageit) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=partageit "View the GitHub contributions of partageit on repository bevry/staticsitegenerators")
-   [Patrick Braune](https://github.com/pabra) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=pabra "View the GitHub contributions of Patrick Braune on repository bevry/staticsitegenerators")
-   [Paulo Henrique Rodrigues Pinheiro](https://github.com/paulohrpinheiro) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=paulohrpinheiro "View the GitHub contributions of Paulo Henrique Rodrigues Pinheiro on repository bevry/staticsitegenerators")
-   [Pawan Dubey](https://github.com/pawandubey) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=pawandubey "View the GitHub contributions of Pawan Dubey on repository bevry/staticsitegenerators")
-   [Philippe Bruhat](https://github.com/book) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=book "View the GitHub contributions of Philippe Bruhat on repository bevry/staticsitegenerators")
-   [Pierre-Yves Ritschard](https://github.com/pyr) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=pyr "View the GitHub contributions of Pierre-Yves Ritschard on repository bevry/staticsitegenerators")
-   [Rafael G. Martins](https://github.com/rafaelmartins) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=rafaelmartins "View the GitHub contributions of Rafael G. Martins on repository bevry/staticsitegenerators")
-   [Ramiro Gómez](https://github.com/yaph) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=yaph "View the GitHub contributions of Ramiro Gómez on repository bevry/staticsitegenerators")
-   [Revoltech](https://github.com/plugnburn) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=plugnburn "View the GitHub contributions of Revoltech on repository bevry/staticsitegenerators")
-   [Rhio Kim](https://github.com/rhiokim) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=rhiokim "View the GitHub contributions of Rhio Kim on repository bevry/staticsitegenerators")
-   [Robert](https://github.com/rjmunro) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=rjmunro "View the GitHub contributions of Robert on repository bevry/staticsitegenerators")
-   [Rob Loach](https://github.com/RobLoach) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=RobLoach "View the GitHub contributions of Rob Loach on repository bevry/staticsitegenerators")
-   [Romain Guerin](https://github.com/pomeh) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=pomeh "View the GitHub contributions of Romain Guerin on repository bevry/staticsitegenerators")
-   [Roman Atachiants](https://github.com/kelindar) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=kelindar "View the GitHub contributions of Roman Atachiants on repository bevry/staticsitegenerators")
-   [Rudy Affandi](https://github.com/rudyaffandi) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=rudyaffandi "View the GitHub contributions of Rudy Affandi on repository bevry/staticsitegenerators")
-   [Rui Wang](https://github.com/isnowfy) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=isnowfy "View the GitHub contributions of Rui Wang on repository bevry/staticsitegenerators")
-   [Ryan Govostes](https://github.com/rgov) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=rgov "View the GitHub contributions of Ryan Govostes on repository bevry/staticsitegenerators")
-   [Ryan Zimmerman](https://github.com/RyanZim) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=RyanZim "View the GitHub contributions of Ryan Zimmerman on repository bevry/staticsitegenerators")
-   [Samantha Geitz](https://github.com/samanthamichele7) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=samanthamichele7 "View the GitHub contributions of Samantha Geitz on repository bevry/staticsitegenerators")
-   [Samuel Dodson](https://github.com/samueldodson) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=samueldodson "View the GitHub contributions of Samuel Dodson on repository bevry/staticsitegenerators")
-   [Sam Wilson](https://github.com/samwilson) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=samwilson "View the GitHub contributions of Sam Wilson on repository bevry/staticsitegenerators")
-   [Sebastian Aigner](https://github.com/SebastianAigner) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=SebastianAigner "View the GitHub contributions of Sebastian Aigner on repository bevry/staticsitegenerators")
-   [Sergey Bronnikov](https://github.com/ligurio) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=ligurio "View the GitHub contributions of Sergey Bronnikov on repository bevry/staticsitegenerators")
-   [Seyi Ogunyemi](https://github.com/micrypt) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=micrypt "View the GitHub contributions of Seyi Ogunyemi on repository bevry/staticsitegenerators")
-   [shapeshed](https://github.com/shapeshed) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=shapeshed "View the GitHub contributions of shapeshed on repository bevry/staticsitegenerators")
-   [Shlomi Fish](https://github.com/shlomif) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=shlomif "View the GitHub contributions of Shlomi Fish on repository bevry/staticsitegenerators")
-   [Simon Dann](https://github.com/carbontwelve) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=carbontwelve "View the GitHub contributions of Simon Dann on repository bevry/staticsitegenerators")
-   [Stefan Göbel](https://github.com/qoeb) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=qoeb "View the GitHub contributions of Stefan Göbel on repository bevry/staticsitegenerators")
-   [Stefan Henzen](https://github.com/StefanH) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=StefanH "View the GitHub contributions of Stefan Henzen on repository bevry/staticsitegenerators")
-   [Stefan Marsiske](https://github.com/stef) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=stef "View the GitHub contributions of Stefan Marsiske on repository bevry/staticsitegenerators")
-   [Stéphane Goetz](https://github.com/onigoetz) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=onigoetz "View the GitHub contributions of Stéphane Goetz on repository bevry/staticsitegenerators")
-   [Stéphane Klein](https://github.com/harobed) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=harobed "View the GitHub contributions of Stéphane Klein on repository bevry/staticsitegenerators")
-   [sternenseemann](https://github.com/sternenseemann) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=sternenseemann "View the GitHub contributions of sternenseemann on repository bevry/staticsitegenerators")
-   [Steve Jamesson](https://github.com/jevets) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=jevets "View the GitHub contributions of Steve Jamesson on repository bevry/staticsitegenerators")
-   [Steve Moyer](https://github.com/smoyer64) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=smoyer64 "View the GitHub contributions of Steve Moyer on repository bevry/staticsitegenerators")
-   [Steven](https://github.com/styfle) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=styfle "View the GitHub contributions of Steven on repository bevry/staticsitegenerators")
-   [Steve Purves](https://github.com/stevejpurves) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=stevejpurves "View the GitHub contributions of Steve Purves on repository bevry/staticsitegenerators")
-   [Subhash Chandran](https://github.com/subwiz) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=subwiz "View the GitHub contributions of Subhash Chandran on repository bevry/staticsitegenerators")
-   [Sunaina Pai](https://github.com/sunainapai) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=sunainapai "View the GitHub contributions of Sunaina Pai on repository bevry/staticsitegenerators")
-   [Sunny](https://github.com/TheLastZombie) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=TheLastZombie "View the GitHub contributions of Sunny on repository bevry/staticsitegenerators")
-   [Suraj Shukla](https://github.com/SurajShukla) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=SurajShukla "View the GitHub contributions of Suraj Shukla on repository bevry/staticsitegenerators")
-   [Suriyaa Sundararuban](https://github.com/suriyaa) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=suriyaa "View the GitHub contributions of Suriyaa Sundararuban on repository bevry/staticsitegenerators")
-   [Sven Luijten](https://github.com/svenluijten) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=svenluijten "View the GitHub contributions of Sven Luijten on repository bevry/staticsitegenerators")
-   [Tanky Woo](https://github.com/tankywoo) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=tankywoo "View the GitHub contributions of Tanky Woo on repository bevry/staticsitegenerators")
-   [Taufik Nurrohman](https://github.com/taufik-nurrohman) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=taufik-nurrohman "View the GitHub contributions of Taufik Nurrohman on repository bevry/staticsitegenerators")
-   [Thane Thomson](https://github.com/thanethomson) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=thanethomson "View the GitHub contributions of Thane Thomson on repository bevry/staticsitegenerators")
-   [Thibault Charbonnier](https://github.com/thibaultcha) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=thibaultcha "View the GitHub contributions of Thibault Charbonnier on repository bevry/staticsitegenerators")
-   [thierrybgentile](https://github.com/thierrybgentile) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=thierrybgentile "View the GitHub contributions of thierrybgentile on repository bevry/staticsitegenerators")
-   [Thomas Ingram](https://github.com/ravinggenius) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=ravinggenius "View the GitHub contributions of Thomas Ingram on repository bevry/staticsitegenerators")
-   [Thomas Vaillant](https://github.com/thomvaill) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=thomvaill "View the GitHub contributions of Thomas Vaillant on repository bevry/staticsitegenerators")
-   [Tim Hartmann](https://github.com/timhartmann) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=timhartmann "View the GitHub contributions of Tim Hartmann on repository bevry/staticsitegenerators")
-   [Tobias Reich](https://github.com/electerious) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=electerious "View the GitHub contributions of Tobias Reich on repository bevry/staticsitegenerators")
-   [Todd Lucas](https://github.com/toddlucas) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=toddlucas "View the GitHub contributions of Todd Lucas on repository bevry/staticsitegenerators")
-   [Tom Adler](https://github.com/arty-name) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=arty-name "View the GitHub contributions of Tom Adler on repository bevry/staticsitegenerators")
-   [Tom Link](https://github.com/tomtom) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=tomtom "View the GitHub contributions of Tom Link on repository bevry/staticsitegenerators")
-   [Toshiki Iga](https://github.com/igapyon) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=igapyon "View the GitHub contributions of Toshiki Iga on repository bevry/staticsitegenerators")
-   [Trevor Caira](https://github.com/trevorc) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=trevorc "View the GitHub contributions of Trevor Caira on repository bevry/staticsitegenerators")
-   [UniEon](https://github.com/vikrantrathore) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=vikrantrathore "View the GitHub contributions of UniEon on repository bevry/staticsitegenerators")
-   [Verhoeckx](https://github.com/Verhoeckx) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=Verhoeckx "View the GitHub contributions of Verhoeckx on repository bevry/staticsitegenerators")
-   [Viktor Varland](https://github.com/varl) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=varl "View the GitHub contributions of Viktor Varland on repository bevry/staticsitegenerators")
-   [W. Caleb McDaniel](https://github.com/wcaleb) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=wcaleb "View the GitHub contributions of W. Caleb McDaniel on repository bevry/staticsitegenerators")
-   [wifiextender](https://github.com/wifiextender) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=wifiextender "View the GitHub contributions of wifiextender on repository bevry/staticsitegenerators")
-   [xorpd](https://github.com/xorpd) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=xorpd "View the GitHub contributions of xorpd on repository bevry/staticsitegenerators")
-   [xvweirong](https://github.com/xvweirong) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=xvweirong "View the GitHub contributions of xvweirong on repository bevry/staticsitegenerators")
-   [Yangshun Tay](https://github.com/yangshun) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=yangshun "View the GitHub contributions of Yangshun Tay on repository bevry/staticsitegenerators")
-   [Yavuz Ege Özcan](https://github.com/egeozcan) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=egeozcan "View the GitHub contributions of Yavuz Ege Özcan on repository bevry/staticsitegenerators")
-   [Yoshiya Hinosawa](https://github.com/kt3k) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=kt3k "View the GitHub contributions of Yoshiya Hinosawa on repository bevry/staticsitegenerators")
-   [Yo! Symfony](https://github.com/yosymfony) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=yosymfony "View the GitHub contributions of Yo! Symfony on repository bevry/staticsitegenerators")
-   [Zsolt Udvari](https://github.com/uzsolt) — [view contributions](https://github.com/bevry/staticsitegenerators/commits?author=uzsolt "View the GitHub contributions of Zsolt Udvari on repository bevry/staticsitegenerators")

### Finances

<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-thanksdev"><a href="https://thanks.dev/u/gh/bevry" title="Donate to this project using ThanksDev"><img src="https://img.shields.io/badge/thanksdev-donate-yellow.svg" alt="ThanksDev donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

#### Sponsors

-   [Andrew Nesbitt](https://nesbitt.io) — Working on mapping the world of open source software @ecosyste-ms  and empowering developers with @octobox
-   [Divinci ™](https://divinci.ai) — A more comfortable AI conversation experience, with friends! 🤖🖤
-   [Mr. Henry](https://mrhenry.be)
-   [Poonacha Medappa](https://poonachamedappa.com)
-   [Roboflow](https://roboflow.com)
-   [Square](https://github.com/square)

#### Donors

-   [Andrew Nesbitt](https://nesbitt.io)
-   [Ángel González](https://univunix.com)
-   [Arjun Aditya](https://arjunaditya.xyz)
-   [Armen Mkrtchian](https://mogoni.dev)
-   [Canonical](https://canonical.com)
-   [Chad](https://opencollective.com/chad8)
-   [Divinci ™](https://divinci.ai)
-   [dr.dimitru](https://veliovgroup.com)
-   [Elliott Ditman](https://elliottditman.com)
-   [entroniq](https://gitlab.com/entroniq)
-   [Frontend Masters](https://FrontendMasters.com)
-   [GitHub](https://github.com/about)
-   [Hunter Beast](https://cryptoquick.com)
-   [Jean-Luc Geering](https://github.com/jlgeering)
-   [Lee Driscoll](https://leedriscoll.me)
-   [Michael Duane Mooring](https://divinci.app)
-   [Michael Harry Scepaniak](https://michaelscepaniak.com)
-   [Mr. Henry](https://mrhenry.be)
-   [Pleo](https://pleo.io)
-   [Poonacha Medappa](https://poonachamedappa.com)
-   [Robert de Forest](https://github.com/rdeforest)
-   [Roboflow](https://roboflow.com)
-   [Scott Kempson](https://github.com/scokem)
-   [Skunk Team](https://skunk.team)
-   [Square](https://github.com/square)
-   [WriterJohnBuck](https://github.com/WriterJohnBuck)

<!-- /BACKERS -->

<!-- LICENSE/ -->

## License

Unless stated otherwise all works are:

-   Copyright &copy; 2013+ [Benjamin Lupton](https://balupton.com)
-   Copyright &copy; 2013 [Jasper Van der Jeugt](https://jaspervdj.be)

and licensed under:

-   [The Unlicense](http://spdx.org/licenses/Unlicense.html)

<!-- /LICENSE -->
