var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main/cue.js',
  output: {
    path: path.resolve(__dirname, '../bundle'),
    library: 'Cue',
    filename: 'vender.js'
  },
  module: {
    loaders: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map'
}