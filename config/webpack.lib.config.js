const glob = require("glob");
const path = require('path');
const config = require('./webpack.base.config');

config.output = {
  path: path.resolve(__dirname, '../dist/lib'),
  publicPath: '/',
  filename: 'semantic-ui-vue.js',
  library: 'SemanticUIVue',
  libraryExport: 'default',
  libraryTarget: 'umd',
};

config.entry = './src/index.js';

module.exports = config;
