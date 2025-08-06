<!-- TITLE/ -->

<h1>Static Site Generators Listing</h1>

<!-- /TITLE -->

<!-- BADGES/ -->

<span class="badge-npmversion"><a href="https://npmjs.org/package/staticsitegenerators" title="View this project on NPM"><img src="https://img.shields.io/npm/v/staticsitegenerators.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/staticsitegenerators" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/staticsitegenerators.svg" alt="NPM downloads" /></a></span>
<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

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

<h2>History</h2>

<a href="https://github.com/bevry/staticsitegenerators/blob/master/HISTORY.md#files">Discover the release history by heading on over to the <code>HISTORY.md</code> file.</a>

<!-- /HISTORY -->

<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li><a href="https://github.com/balupton">Benjamin Lupton</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/davisonio">Craig Davison</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=davisonio" title="View the GitHub contributions of Craig Davison on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="http://jaspervdj.be">Jasper Van der Jeugt</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=jaspervdj" title="View the GitHub contributions of Jasper Van der Jeugt on repository bevry/staticsitegenerators">view contributions</a></li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?

<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="https://github.com/solderjs">AJ ONeal</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=solderjs" title="View the GitHub contributions of AJ ONeal on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/AdamBien">Adam Bien</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=AdamBien" title="View the GitHub contributions of Adam Bien on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/beudbeud">Adrien Beudin</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=beudbeud" title="View the GitHub contributions of Adrien Beudin on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/Aisbergg">Aisbergg</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=Aisbergg" title="View the GitHub contributions of Aisbergg on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/bomberstudios">Ale Muñoz</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=bomberstudios" title="View the GitHub contributions of Ale Muñoz on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="http://razbakov.com/">Aleksey Razbakov</a></li>
<li><a href="https://github.com/lexoyo">Alex Hoyau</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=lexoyo" title="View the GitHub contributions of Alex Hoyau on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/opoo">Alex Lin</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=opoo" title="View the GitHub contributions of Alex Lin on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/pierogitus">Alex Thompson</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=pierogitus" title="View the GitHub contributions of Alex Thompson on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/vokeio">Alexander Elias</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=vokeio" title="View the GitHub contributions of Alexander Elias on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/alexchopin">Alexandre Chopin</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=alexchopin" title="View the GitHub contributions of Alexandre Chopin on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/agonzalezro">Alexandre González</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=agonzalezro" title="View the GitHub contributions of Alexandre González on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/agrison">Alexandre Grison</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=agrison" title="View the GitHub contributions of Alexandre Grison on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/rudyryk">Alexey Kinev</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=rudyryk" title="View the GitHub contributions of Alexey Kinev on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/amitu">Amit Upadhyay</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=amitu" title="View the GitHub contributions of Amit Upadhyay on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/andrewjamesmurray">Andrew Murray</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=andrewjamesmurray" title="View the GitHub contributions of Andrew Murray on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/andrewmallis">Andrew_Mallis</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=andrewmallis" title="View the GitHub contributions of Andrew_Mallis on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/rhukster">Andy Miller</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=rhukster" title="View the GitHub contributions of Andy Miller on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/ankushg">Ankush Gupta</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=ankushg" title="View the GitHub contributions of Ankush Gupta on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/anthonny">Anthonny Quérouil</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=anthonny" title="View the GitHub contributions of Anthonny Quérouil on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/anton-iarchuk-sysgears">Anton Iarchuk</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=anton-iarchuk-sysgears" title="View the GitHub contributions of Anton Iarchuk on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/podviaznikov">Anton Podviaznikov</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=podviaznikov" title="View the GitHub contributions of Anton Podviaznikov on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/Narno">Arnaud Ligny</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=Narno" title="View the GitHub contributions of Arnaud Ligny on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/akrylysov">Artem Krylysov</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=akrylysov" title="View the GitHub contributions of Artem Krylysov on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/arty-name">Artemy Tregubenko</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=arty-name" title="View the GitHub contributions of Artemy Tregubenko on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/lizheming">Austin Lee</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=lizheming" title="View the GitHub contributions of Austin Lee on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/barryclark">Barry Clark</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=barryclark" title="View the GitHub contributions of Barry Clark on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/grv87">Basil Peace</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=grv87" title="View the GitHub contributions of Basil Peace on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/venthur">Bastian Venthur</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=venthur" title="View the GitHub contributions of Bastian Venthur on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/zoobab">Benjamin Henrion</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=zoobab" title="View the GitHub contributions of Benjamin Henrion on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/tak1n">Benjamin Klotz</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=tak1n" title="View the GitHub contributions of Benjamin Klotz on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/balupton">Benjamin Lupton</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/whump">Bill Humphries</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=whump" title="View the GitHub contributions of Bill Humphries on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/boscoh">Bosco Ho</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=boscoh" title="View the GitHub contributions of Bosco Ho on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="http://www.0x743.com">Brett Estrade</a></li>
<li><a href="https://github.com/ByronKellett">Byron Kellett</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=ByronKellett" title="View the GitHub contributions of Byron Kellett on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/byrondev">Byron LK</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=byrondev" title="View the GitHub contributions of Byron LK on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/colynb">C Brown</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=colynb" title="View the GitHub contributions of C Brown on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/cjbrooks12">Casey Brooks</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=cjbrooks12" title="View the GitHub contributions of Casey Brooks on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/clehner">Charles Lehner</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=clehner" title="View the GitHub contributions of Charles Lehner on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/xrd">Chris Dawson</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=xrd" title="View the GitHub contributions of Chris Dawson on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/Kwpolska">Chris Warrick</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=Kwpolska" title="View the GitHub contributions of Chris Warrick on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/kalgynirae">Colin Chan</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=kalgynirae" title="View the GitHub contributions of Colin Chan on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/davisonio">Craig Davison</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=davisonio" title="View the GitHub contributions of Craig Davison on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/dertuxmalwieder">Cthulhux</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=dertuxmalwieder" title="View the GitHub contributions of Cthulhux on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/elaOnMars">Daniela Knoll</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=elaOnMars" title="View the GitHub contributions of Daniela Knoll on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/imdario">Dario Castañé</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=imdario" title="View the GitHub contributions of Dario Castañé on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/daveaglick">Dave Glick</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=daveaglick" title="View the GitHub contributions of Dave Glick on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/snide">Dave Snider</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=snide" title="View the GitHub contributions of Dave Snider on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/caldwell">David Caldwell</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=caldwell" title="View the GitHub contributions of David Caldwell on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/eads">David Eads</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=eads" title="View the GitHub contributions of David Eads on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/robogeek">David Herron</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=robogeek" title="View the GitHub contributions of David Herron on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/Xeoncross">David Pennington</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=Xeoncross" title="View the GitHub contributions of David Pennington on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/davidsiaw">David Siaw</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=davidsiaw" title="View the GitHub contributions of David Siaw on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/denisftw">Denis</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=denisftw" title="View the GitHub contributions of Denis on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/deber">Denis Bernard</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=deber" title="View the GitHub contributions of Denis Bernard on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/denis-soundcloud">Denis Defreyne</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=denis-soundcloud" title="View the GitHub contributions of Denis Defreyne on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/ddfreyne">Denis Defreyne</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=ddfreyne" title="View the GitHub contributions of Denis Defreyne on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/preaction">Doug Bell</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=preaction" title="View the GitHub contributions of Doug Bell on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/ericalli">Eric Alli</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=ericalli" title="View the GitHub contributions of Eric Alli on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/aaemnnosttv">Evan Mattson</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=aaemnnosttv" title="View the GitHub contributions of Evan Mattson on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/esonderegger">Evan Sonderegger</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=esonderegger" title="View the GitHub contributions of Evan Sonderegger on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/g4b1nagy">Gabi Nagy</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=g4b1nagy" title="View the GitHub contributions of Gabi Nagy on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/gar1t">Garrett Smith</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=gar1t" title="View the GitHub contributions of Garrett Smith on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/shapeshed">George Ornbo</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=shapeshed" title="View the GitHub contributions of George Ornbo on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/gflohr">Guido Flohr</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=gflohr" title="View the GitHub contributions of Guido Flohr on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/mhlakhani">Hasnain Lakhani</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=mhlakhani" title="View the GitHub contributions of Hasnain Lakhani on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/saintaardvark">Hugh Brown</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=saintaardvark" title="View the GitHub contributions of Hugh Brown on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/iansullivan88">Ian Sullivan</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=iansullivan88" title="View the GitHub contributions of Ian Sullivan on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://avalos.me/">Iván Ávalos</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=ivan-avalos" title="View the GitHub contributions of Iván Ávalos on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/melnikov-ivan">Ivan Melnikov</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=melnikov-ivan" title="View the GitHub contributions of Ivan Melnikov on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/jackhill">Jack Hill</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=jackhill" title="View the GitHub contributions of Jack Hill on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/zaiste">Jakub Neander</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=zaiste" title="View the GitHub contributions of Jakub Neander on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/janpecha">Jan Pecha</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=janpecha" title="View the GitHub contributions of Jan Pecha on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/Japh">Japh</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=Japh" title="View the GitHub contributions of Japh on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="http://jaspervdj.be">Jasper Van der Jeugt</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=jaspervdj" title="View the GitHub contributions of Jasper Van der Jeugt on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/wikismith">Jeffrey Hicks</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=wikismith" title="View the GitHub contributions of Jeffrey Hicks on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/jeremydw">Jeremy Weinstein</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=jeremydw" title="View the GitHub contributions of Jeremy Weinstein on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/CJex">Jex</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=CJex" title="View the GitHub contributions of Jex on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="http://campbell.fm">Jim Campbell</a></li>
<li><a href="https://github.com/j1mc">Jim Campbell</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=j1mc" title="View the GitHub contributions of Jim Campbell on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="http://www.m0ngr31.us">Joe Ipson</a></li>
<li><a href="https://github.com/0xxon">Johanna</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=0xxon" title="View the GitHub contributions of Johanna on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/johannesboyne">Johannes Boyne</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=johannesboyne" title="View the GitHub contributions of Johannes Boyne on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/genehack">John SJ Anderson</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=genehack" title="View the GitHub contributions of John SJ Anderson on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/johngtait">John Tait</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=johngtait" title="View the GitHub contributions of John Tait on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/jonschlinkert">Jon Schlinkert</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=jonschlinkert" title="View the GitHub contributions of Jon Schlinkert on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/jonbullock">Jonathan Bullock</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=jonbullock" title="View the GitHub contributions of Jonathan Bullock on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/jfoucher">Jonathan Foucher</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=jfoucher" title="View the GitHub contributions of Jonathan Foucher on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/juanbrujo">Jorge Epuñan</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=juanbrujo" title="View the GitHub contributions of Jorge Epuñan on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/joshualloyd">Joshua Lloyd</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=joshualloyd" title="View the GitHub contributions of Joshua Lloyd on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/bebraw">Juho Vepsäläinen</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=bebraw" title="View the GitHub contributions of Juho Vepsäläinen on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/laedit">Jérémie Bertrand</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=laedit" title="View the GitHub contributions of Jérémie Bertrand on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/kaihendry">Kai Hendry</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=kaihendry" title="View the GitHub contributions of Kai Hendry on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/novoid">Karl Voit</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=novoid" title="View the GitHub contributions of Karl Voit on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/klml">Klaus Mueller</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=klml" title="View the GitHub contributions of Klaus Mueller on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/koenbok">Koen Bok</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=koenbok" title="View the GitHub contributions of Koen Bok on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/koistya">Konstantin Tarkus</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=koistya" title="View the GitHub contributions of Konstantin Tarkus on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/kushaldas">Kushal Das</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=kushaldas" title="View the GitHub contributions of Kushal Das on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/lrvick">Lance R. Vick</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=lrvick" title="View the GitHub contributions of Lance R. Vick on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/leo">Leo Lamprecht</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=leo" title="View the GitHub contributions of Leo Lamprecht on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/leonstafford">Leon Stafford</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=leonstafford" title="View the GitHub contributions of Leon Stafford on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/LomigLavnek">Lomig Lavnek</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=LomigLavnek" title="View the GitHub contributions of Lomig Lavnek on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/lutzroeder">Lutz Roeder</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=lutzroeder" title="View the GitHub contributions of Lutz Roeder on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/berberic2">M G Berberich</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=berberic2" title="View the GitHub contributions of M G Berberich on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/magnars">Magnar Sveen</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=magnars" title="View the GitHub contributions of Magnar Sveen on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/manuzhang">Manu Zhang</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=manuzhang" title="View the GitHub contributions of Manu Zhang on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/Manvel">Manvel Saroyan</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=Manvel" title="View the GitHub contributions of Manvel Saroyan on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/markdbenson">Mark Benson</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=markdbenson" title="View the GitHub contributions of Mark Benson on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/markseu">Mark Seuffert</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=markseu" title="View the GitHub contributions of Mark Seuffert on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/markusfisch">Markus Fisch</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=markusfisch" title="View the GitHub contributions of Markus Fisch on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/mna">Martin Angers</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=mna" title="View the GitHub contributions of Martin Angers on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/Songmu">Masayuki Matsuki</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=Songmu" title="View the GitHub contributions of Masayuki Matsuki on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/mathiasrw">Mathias Rangel Wulff</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=mathiasrw" title="View the GitHub contributions of Mathias Rangel Wulff on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/mblayman">Matt Layman</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=mblayman" title="View the GitHub contributions of Matt Layman on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/mbethke">Matthias Bethke</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=mbethke" title="View the GitHub contributions of Matthias Bethke on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/MoOx">Max Thirouin</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=MoOx" title="View the GitHub contributions of Max Thirouin on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/mbleigh">Michael Bleigh</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=mbleigh" title="View the GitHub contributions of Michael Bleigh on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/datagrok">Michael F. Lamb</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=datagrok" title="View the GitHub contributions of Michael F. Lamb on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/designorant">Michał Ordon</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=designorant" title="View the GitHub contributions of Michał Ordon on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/muellermichel">Michel Müller</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=muellermichel" title="View the GitHub contributions of Michel Müller on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/mikekreuzer">Mike Kreuzer</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=mikekreuzer" title="View the GitHub contributions of Mike Kreuzer on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/MikeMitterer">Mike Mitterer</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=MikeMitterer" title="View the GitHub contributions of Mike Mitterer on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/mixu">Mikito Takada</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=mixu" title="View the GitHub contributions of Mikito Takada on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/MinchinWeb">MinchinWeb</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=MinchinWeb" title="View the GitHub contributions of MinchinWeb on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/njdehoog">Niels de Hoog</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=njdehoog" title="View the GitHub contributions of Niels de Hoog on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/obensonne">Oben Sonne</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=obensonne" title="View the GitHub contributions of Oben Sonne on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/blankoworld">Olivier DOSSMANN</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=blankoworld" title="View the GitHub contributions of Olivier DOSSMANN on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/oz123">Oz N Tiram</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=oz123" title="View the GitHub contributions of Oz N Tiram on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/pabra">Patrick Braune</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=pabra" title="View the GitHub contributions of Patrick Braune on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/paulohrpinheiro">Paulo Henrique Rodrigues Pinheiro</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=paulohrpinheiro" title="View the GitHub contributions of Paulo Henrique Rodrigues Pinheiro on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/pawandubey">Pawan Dubey</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=pawandubey" title="View the GitHub contributions of Pawan Dubey on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/book">Philippe Bruhat</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=book" title="View the GitHub contributions of Philippe Bruhat on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/pyr">Pierre-Yves Ritschard</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=pyr" title="View the GitHub contributions of Pierre-Yves Ritschard on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/rafaelmartins">Rafael G. Martins</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=rafaelmartins" title="View the GitHub contributions of Rafael G. Martins on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/yaph">Ramiro Gómez</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=yaph" title="View the GitHub contributions of Ramiro Gómez on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/ranmocy">Ranmocy Sheng</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=ranmocy" title="View the GitHub contributions of Ranmocy Sheng on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/plugnburn">Revoltech</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=plugnburn" title="View the GitHub contributions of Revoltech on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/rhiokim">Rhio Kim</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=rhiokim" title="View the GitHub contributions of Rhio Kim on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/RobLoach">Rob Loach</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=RobLoach" title="View the GitHub contributions of Rob Loach on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/rjmunro">Robert</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=rjmunro" title="View the GitHub contributions of Robert on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/pomeh">Romain Guerin</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=pomeh" title="View the GitHub contributions of Romain Guerin on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/kelindar">Roman Atachiants</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=kelindar" title="View the GitHub contributions of Roman Atachiants on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/lesaff">Rudy Affandi</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=lesaff" title="View the GitHub contributions of Rudy Affandi on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/isnowfy">Rui Wang</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=isnowfy" title="View the GitHub contributions of Rui Wang on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/rgov">Ryan Govostes</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=rgov" title="View the GitHub contributions of Ryan Govostes on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/RyanZim">Ryan Zimmerman</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=RyanZim" title="View the GitHub contributions of Ryan Zimmerman on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/samanthamichele7">Samantha Geitz</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=samanthamichele7" title="View the GitHub contributions of Samantha Geitz on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/samueldodson">Samuel Dodson</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=samueldodson" title="View the GitHub contributions of Samuel Dodson on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/SebastianAigner">Sebastian Aigner</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=SebastianAigner" title="View the GitHub contributions of Sebastian Aigner on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/ligurio">Sergey Bronnikov</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=ligurio" title="View the GitHub contributions of Sergey Bronnikov on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/micrypt">Seyi Ogunyemi</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=micrypt" title="View the GitHub contributions of Seyi Ogunyemi on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/shlomif">Shlomi Fish</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=shlomif" title="View the GitHub contributions of Shlomi Fish on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/carbontwelve">Simon Dann</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=carbontwelve" title="View the GitHub contributions of Simon Dann on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/qoeb">Stefan Göbel</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=qoeb" title="View the GitHub contributions of Stefan Göbel on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/stef">Stefan Marsiske</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=stef" title="View the GitHub contributions of Stefan Marsiske on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/StefanH">StefanH</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=StefanH" title="View the GitHub contributions of StefanH on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/jevets">Steve Jamesson</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=jevets" title="View the GitHub contributions of Steve Jamesson on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/smoyer64">Steve Moyer</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=smoyer64" title="View the GitHub contributions of Steve Moyer on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/styfle">Steven</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=styfle" title="View the GitHub contributions of Steven on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/harobed">Stéphane Klein</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=harobed" title="View the GitHub contributions of Stéphane Klein on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/subwiz">Subhash Chandran</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=subwiz" title="View the GitHub contributions of Subhash Chandran on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/sunainapai">Sunaina Pai</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=sunainapai" title="View the GitHub contributions of Sunaina Pai on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/SurajShukla">Suraj Shukla</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=SurajShukla" title="View the GitHub contributions of Suraj Shukla on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/SuriyaaKudoIsc">Suriyaa Sundararuban</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=SuriyaaKudoIsc" title="View the GitHub contributions of Suriyaa Sundararuban on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/svenluijten">Sven Luijten</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=svenluijten" title="View the GitHub contributions of Sven Luijten on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/tankywoo">Tanky Woo</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=tankywoo" title="View the GitHub contributions of Tanky Woo on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/taufik-nurrohman">Taufik Nurrohman</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=taufik-nurrohman" title="View the GitHub contributions of Taufik Nurrohman on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/thanethomson">Thane Thomson</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=thanethomson" title="View the GitHub contributions of Thane Thomson on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/thibaultcha">Thibault Charbonnier</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=thibaultcha" title="View the GitHub contributions of Thibault Charbonnier on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/ravinggenius">Thomas Ingram</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=ravinggenius" title="View the GitHub contributions of Thomas Ingram on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/timhartmann">Tim Hartmann</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=timhartmann" title="View the GitHub contributions of Tim Hartmann on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/electerious">Tobias Reich</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=electerious" title="View the GitHub contributions of Tobias Reich on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/toddlucas">Todd Lucas</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=toddlucas" title="View the GitHub contributions of Todd Lucas on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/tomtom">Tom Link</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=tomtom" title="View the GitHub contributions of Tom Link on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="http://igapyon.github.io/diary/">Toshiki Iga</a></li>
<li><a href="https://github.com/igapyon">Toshiki Iga</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=igapyon" title="View the GitHub contributions of Toshiki Iga on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/trevorc">Trevor Caira</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=trevorc" title="View the GitHub contributions of Trevor Caira on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/varl">Viktor Varland</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=varl" title="View the GitHub contributions of Viktor Varland on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/wcaleb">W. Caleb McDaniel</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=wcaleb" title="View the GitHub contributions of W. Caleb McDaniel on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/yangshun">Yangshun Tay</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=yangshun" title="View the GitHub contributions of Yangshun Tay on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/egeozcan">Yavuz Ege Özcan</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=egeozcan" title="View the GitHub contributions of Yavuz Ege Özcan on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/yosymfony">Yo! Symfony</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=yosymfony" title="View the GitHub contributions of Yo! Symfony on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/kt3k">Yoshiya Hinosawa</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=kt3k" title="View the GitHub contributions of Yoshiya Hinosawa on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/uzsolt">Zsolt Udvari</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=uzsolt" title="View the GitHub contributions of Zsolt Udvari on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/estrabd">___^___</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=estrabd" title="View the GitHub contributions of ___^___ on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/bhuztez">bhuztez</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=bhuztez" title="View the GitHub contributions of bhuztez on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/dbohdan">dbohdan</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=dbohdan" title="View the GitHub contributions of dbohdan on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/farvardin">farvardin</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=farvardin" title="View the GitHub contributions of farvardin on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/feinstaub">feinstaub</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=feinstaub" title="View the GitHub contributions of feinstaub on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/fiatjaf">fiatjaf</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=fiatjaf" title="View the GitHub contributions of fiatjaf on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="http://appernetic.io">goransv</a></li>
<li><a href="https://github.com/harijsm">harijs.me</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=harijsm" title="View the GitHub contributions of harijs.me on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/ipavl">ipavl</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=ipavl" title="View the GitHub contributions of ipavl on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/jandecaluwe">jandecaluwe</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=jandecaluwe" title="View the GitHub contributions of jandecaluwe on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/kambrium">kambrium</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=kambrium" title="View the GitHub contributions of kambrium on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/kangulardev">kangulardev</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=kangulardev" title="View the GitHub contributions of kangulardev on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/lecnim">lecnim</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=lecnim" title="View the GitHub contributions of lecnim on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/mattn">mattn</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=mattn" title="View the GitHub contributions of mattn on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/nodiscc">nodiscc</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=nodiscc" title="View the GitHub contributions of nodiscc on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/packetrhino">packetrhino</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=packetrhino" title="View the GitHub contributions of packetrhino on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/partageit">partageit</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=partageit" title="View the GitHub contributions of partageit on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/sternenseemann">sternenseemann</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=sternenseemann" title="View the GitHub contributions of sternenseemann on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/thierrybgentile">thierrybgentile</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=thierrybgentile" title="View the GitHub contributions of thierrybgentile on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/vikrantrathore">vikrantrathore</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=vikrantrathore" title="View the GitHub contributions of vikrantrathore on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/wifiextender">wifiextender</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=wifiextender" title="View the GitHub contributions of wifiextender on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/xorpd">xorpd</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=xorpd" title="View the GitHub contributions of xorpd on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/xvweirong">xvweirong</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=xvweirong" title="View the GitHub contributions of xvweirong on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/yuzoolcode">yuzoolcode</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=yuzoolcode" title="View the GitHub contributions of yuzoolcode on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/zigg">zigg</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=zigg" title="View the GitHub contributions of zigg on repository bevry/staticsitegenerators">view contributions</a></li>
<li><a href="https://github.com/atilacamurca">Átila Camurça Alves</a> — <a href="https://github.com/bevry/staticsitegenerators/commits?author=atilacamurca" title="View the GitHub contributions of Átila Camurça Alves on repository bevry/staticsitegenerators">view contributions</a></li></ul>

<a href="https://github.com/bevry/staticsitegenerators/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->

<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2013+ <a href="http://bevry.me">Bevry Pty Ltd</a></li>
<li>Copyright &copy; 2013 <a href="http://jaspervdj.be">Jasper Van der Jeugt</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/Unlicense.html">The Unlicense</a></li></ul>

<!-- /LICENSE -->
