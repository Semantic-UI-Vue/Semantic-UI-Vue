const path = require('path');

module.exports = {
  runtimeCompiler: true,
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
  },
  chainWebpack: config => {
    config
      .plugin('copy')
      .tap(args => {
        args[0][0].from = path.resolve(__dirname, 'docs/public');
        return args
      })
  }

}
