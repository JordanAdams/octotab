const request = require('request-promise-native');
const xml2js = require('xml2js-es6-promise');
const fs = require('fs-promise');
const path = require('path');
const { pathOr, map } = require('ramda');

const outputPath = path.resolve(__dirname, '../data/octodex.json');

const getFeedEntries = pathOr([], ['feed', 'entry']);

const transformEntry = entry => ({
  title: entry.title[0],
  image_url: entry.content[0].div[0].a[0].img[0].$.src,
});

request('http://feeds.feedburner.com/Octocats')
  .then(xml2js)
  .then(getFeedEntries)
  .then(map(transformEntry))
  .then(octodex => JSON.stringify(octodex, null, 2))
  .then(json => fs.writeFile(outputPath, json))
  .then(() => console.log(`Wrote octodex to ${outputPath}`))
  .catch(err => console.error(err))
