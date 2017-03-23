var webpack = require('webpack')
var path = require('path')

module.exports = {

  entry: [
    './src/app.js'
  ],

  output:{
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
    publicPath: '/',
    path: path.join(__dirname, '/public/build/' )
  },
  devtool: '#source-map',
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }

    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  plugins: [

  ]

};