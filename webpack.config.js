const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: './docs/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/docs'),
    publicPath: '/',
    filename: '[name].[hash].js',
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
              MiniCssExtractPlugin.loader,
              'css-loader',
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
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
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
