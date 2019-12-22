const config = require('./webpack.multi-cjs.config');

const _filename = config.output.filename;
config.output.filename = (options) => _filename(options).replace('.js', '.min.js');
config.output.libraryTarget = 'umd';
config.output.library = ['SemanticUIVue', '[name]'];
config.output.libraryExport = 'default'

module.exports = config;
