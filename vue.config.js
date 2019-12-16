const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  runtimeCompiler: true,
  outputDir: path.resolve(__dirname, 'dist/docs'),
  pages: {
    app: {
      entry: path.resolve(__dirname, './docs/main.js'),
      template: path.resolve(__dirname, './docs/public/index.html'),
      filename: 'index.html',
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'semantic-ui-vue': path.resolve(__dirname, './src'),
      }
    },
    module: {
      rules: [
        {
          test: /\.md$/i,
          use: 'raw-loader',
        },
      ]
    },
    plugins: [
      new CopyPlugin(
        [
          {
            from: path.resolve(__dirname, 'docs/public'),
            to: path.resolve(__dirname, 'dist/docs'),
            toType: 'dir',
          }
        ]
      ),
    ]
  },
}
