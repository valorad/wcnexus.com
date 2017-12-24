

const { writeFileSync } = require('fs');

const { copy } = require('./lib/helpers');

const distribute = () => {
  let package = require('./package.json');
  delete package.optionalDependencies;
  delete package.devDependencies;
  package.scripts = {};
  package.scripts.start = "node dist/server/wcnexus.com";

  writeFileSync('./dist/package.json', JSON.stringify(package, null, 2), {encoding: 'UTF-8'});
  copy("./README.md", "./dist/README.md");
  copy("./LICENSE", "./dist/LICENSE");
};

const main = () => {
  distribute();
};

main();

module.exports = main;