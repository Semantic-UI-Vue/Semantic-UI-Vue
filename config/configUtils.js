const glob = require('glob');
const path = require('path');

exports.transformFileName = options => {
  const entryModule = options.chunk.entryModule;
  const rawRequest =
    entryModule.rawRequest || entryModule.rootModule.rawRequest;
  return rawRequest.replace('./src', '').replace('.jsx', '.js');
};

exports.getMultipleEntries = () =>
  glob.sync('./src/*/*/*.jsx').reduce((entry, file) => {
    entry[path.basename(file, '.jsx')] = file;
    return entry;
  }, {});
