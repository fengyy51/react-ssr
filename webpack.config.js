var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    main: './app/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{ test: /\.jsx?$/, loader: 'babel-loader'}]
  }
}