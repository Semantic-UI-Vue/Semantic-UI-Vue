/*
  Nuxt.js module for bootstrap-vue
  Usage:
    - Install semantic-ui-vue and semantic-ui-css packages
    - Add this into your nuxt.config.js file:
    {
      modules: [
        'semantic-ui-vue/nuxt'
      ]
    }
*/

const { resolve } = require('path');

module.exports = function nuxtSemanticUIVue(moduleOptions) {
  // Conditionally require semantic-ui original css too if not explicitly disabled
  if (moduleOptions.css !== false) {
    this.options.css.unshift('semantic-ui-css/semantic.min.css');
  }

  // Add vendor
  this.addVendor('semantic-ui-vue');

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'semantic-ui-vue.js',
    moduleOptions,
  });
};

module.exports.meta = require('../package.json');
