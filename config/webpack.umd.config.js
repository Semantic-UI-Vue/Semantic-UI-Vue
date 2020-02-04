const path = require('path');
const config = require('./webpack.base.config');

config.output = {
  path: path.resolve(__dirname, '../dist/umd'),
  publicPath: '/',
  filename: 'semantic-ui-vue.min.js',
  library: 'SemanticUIVue',
  libraryTarget: 'umd',
  libraryExport: 'default',
};

config.entry = './src/index.js';

module.exports = config;
