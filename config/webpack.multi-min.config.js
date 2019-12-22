const config = require('./webpack.multi.config');

const _filename = config.options.filename;
config.output.filename = (options) => _filename(options).replace('.js', '.min.js');
config.options.libraryTarget = 'var';
config.options.library = ['SemanticUIVue', '[name]'];

module.exports = config;
