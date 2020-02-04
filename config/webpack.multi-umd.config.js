const path = require('path');
const kebabCase = require('lodash/kebabCase');
const config = require('./webpack.base.config');
const { transformFileName, getMultipleEntries } = require('./configUtils');

config.entry = getMultipleEntries();
config.output = {
  path: path.resolve(__dirname, '../dist/umd'),
  publicPath: '/',
  filename: options =>
    transformFileName(options)
      .replace(/\/([^/]+)\./, name => `/sui-${kebabCase(name)}.min.`)
      .toLowerCase(),
  library: ['SemanticUIVue', '[name]'],
  libraryExport: 'default',
  libraryTarget: 'umd',
};

module.exports = config;
