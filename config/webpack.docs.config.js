const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./webpack.base.config');

config.output = {
  path: path.resolve(__dirname, '../dist/docs'),
  publicPath: '/',
  filename: '[name].[hash].js',
};

config.entry = './docs/main.js';

config.module.rules.push(
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
        use: ['vue-style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  {
    test: /\.md$/i,
    use: 'raw-loader',
  },
  {
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    loader: 'url-loader?limit=100000',
  },
);

config.plugins.push(
  new CopyPlugin([{ from: './docs/public', to: '.' }]),
  new HtmlWebpackPlugin({
    template: 'docs/public/index.html',
    publicPath: '/',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].css',
  }),
);

module.exports = config;
