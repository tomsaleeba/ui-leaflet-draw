var loaders = require("./loaders")
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: './src/vendor.js',
  },
  output: {
    filename: 'bundle.js',
    path: 'dist'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.json'],
    modulesDirectories: ["node_modules"]
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      warning: false,
      mangle: true,
      comments: false
    }),
    new HtmlWebpackPlugin({
      template: './src/index-template.html',
      inject: 'head',
      hash: true
    }),
    new webpack.optimize.CommonsChunkPlugin(
      /* chunkName= */"vendor",
      /* filename= */"vendor.bundle.js"
    )
  ],
  module: {
    loaders: loaders
  }
}