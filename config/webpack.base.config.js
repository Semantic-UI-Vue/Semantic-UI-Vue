const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          minified: true,
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.vue'],
    alias: {
      'semantic-ui-vue': path.resolve(__dirname, '../src'),
      vue: 'vue/dist/vue.js',
    },
  },
  stats: { children: false },
};
