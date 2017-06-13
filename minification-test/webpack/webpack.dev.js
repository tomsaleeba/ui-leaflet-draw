var loaders = require("./loaders")
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

var outputDir = 'public'
var devServerHost = 'localhost'
var devServerPort = 8000

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: './src/vendor.js',
  },
  output: {
    filename: 'bundle.js',
    path: outputDir
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.json'],
    modulesDirectories: ["bower_components", "node_modules"]
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"]
  },
  devtool: "source-map",
  devServer: {
    contentBase: outputDir,
    host: devServerHost,
    port: devServerPort,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index-template.html',
      inject: 'head',
      hash: false
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
