// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../build/webpack.test.conf');

module.exports = function (config) {
  config.set({
    browsers: ['ChromeNoSandbox'],
    browserNoActivityTimeout: 36e6,
    customLaunchers: {
      ChromeNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    frameworks: ['mocha', 'sinon-chai', 'snapshot', 'mocha-snapshot'],
    reporters: ['spec', 'coverage'],
    files: [
      '**/__snapshots__/**/*.md',
      './index.js',
    ],
    preprocessors: {
      '**/__snapshots__/**/*.md': ['snapshot'],
      './index.js': ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' },
        { type: 'lcovonly', subdir: '.' },
        { type: 'json', subdir: '.' },
      ],
    },
    snapshot: {
      update: !!process.env.UPDATE,
      prune: !!process.env.PRUNE,
    },
  });
};
