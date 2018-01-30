var path = require('path')

/**
 * karma-webpack config
 */
var webpackConfig = {
  devtool: '#inline-source-map',
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src'),
      mvvm: path.resolve(__dirname, '../src/mvvm/index')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}

/**
 * karma base/common config
 */
var KARMABASE = {
  // base path
  basePath: '../test/',

  // frameworks to use
  frameworks: ['mocha'],

  // launch browsers (declare in specific case)
  // browsers: ['Chrome'],

  // result reporters (declare in specific case)
  // reporters: [],

  // karma-webpack config (declare in specific case)
  // webpack: {},

  // list of files to load in the browser
  files: ['./units/index.js'],

  // continuous integration mode
  singleRun: true,

  // list of preprocessors before test
  preprocessors: {
    './units/index.js': ['webpack', 'sourcemap']
  },

  // webpack middleware config
  webpackMiddleware: {
    noInfo: true
  },
  plugins: [
    require('karma-mocha'),
    require('karma-sourcemap-loader'),
    require('karma-webpack'),
    require('karma-chrome-launcher')
  ],

  // Continuous Integration mode
  // if true, Karma captures browsers, runs the tests and exits
  singleRun: !!process.env.TRAVIS,
}

/**
 * unit test config
 */
var UNITCONIG = Object.assign({}, KARMABASE, {
  // browsers: ['Chrome'],
  // browsers: ['Firefox'],
  // browsers: ['Safari'],
  browsers: ['Chrome'],
  webpack: webpackConfig,
  reporters: ['progress']
})

module.exports = {
  unit: UNITCONIG
}