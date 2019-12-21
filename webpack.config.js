const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: './docs/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/docs'),
    publicPath: '/',
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          minified: true,
        },
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[local]_[hash:base64:5]',
                  },
                },
              },
            ],
          },
          {
            use: [
              'vue-style-loader',
              'css-loader'
            ],
          },
        ],
      },
      {
        test: /\.md$/i,
        use: 'raw-loader',
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin([
      { from: './docs/public', to: '.' },
    ]),
    new HtmlWebpackPlugin({
      template: 'docs/public/index.html',
      publicPath: '/',
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.vue'],
    alias: {
      'semantic-ui-vue': path.resolve(__dirname, './src'),
      vue: 'vue/dist/vue.js',
    },
  },
};
