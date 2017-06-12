/**
 * Created by Lxg on 2017/5/11.
 */

let webpack = require('webpack');
let merge = require('webpack-merge');
let baseConfig = require('./base');

let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'project',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      favicon: './favicon.ico',
      hash: true,
      cache: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false
      }
    })
  ]
});
