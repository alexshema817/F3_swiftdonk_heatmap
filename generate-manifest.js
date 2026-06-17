// Regenerates map_files/manifest.json from the .gpx files actually present.
// Run automatically by Netlify on every deploy (see netlify.toml), so adding
// or removing GPX files needs no manual manifest edit.
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'map_files');
const files = fs
  .readdirSync(dir)
  .filter((f) => f.toLowerCase().endsWith('.gpx'))
  .sort();

fs.writeFileSync(
  path.join(dir, 'manifest.json'),
  JSON.stringify(files, null, 2) + '\n'
);

console.log(`manifest.json: wrote ${files.length} GPX entries`);
