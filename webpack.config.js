const path = require('path')
const webpack = require('webpack')

module.exports = {

  entry: {
    app: './src/App.js'
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
    publicPath: '/public/'
  },
  devtool: '#source-map',

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
}