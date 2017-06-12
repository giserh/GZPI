/**
 * Created by Lxg on 2017/5/11.
 */

let path = require('path');
let webpack = require('webpack');

let CopyWebpackPlugin = require('copy-webpack-plugin');

let baseConfig = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'modules': path.resolve(__dirname, '../src/modules'),
      '/static': path.resolve(__dirname, '../static')
    }
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader?limit=8192&name=../dist/images/[name].[hash:7].[ext]'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader?limit=8192&name=../dist/fonts/[name].[hash:7].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: path.resolve(__dirname, '../src/assets/lib'),
        from: '**/*',
        to: path.resolve(__dirname, '../dist/assets/lib')
      },
      {
        context: path.resolve(__dirname, '../src/assets/fonts'),
        from: '**/*',
        to: path.resolve(__dirname, '../dist/assets/fonts')
      },
      {
        context: path.resolve(__dirname, '../src'),
        from: '**/*.html',
        to: path.resolve(__dirname, '../dist')
      },
      {
        context: path.resolve(__dirname, '../src'),
        from: '**/*.jpg',
        to: path.resolve(__dirname, '../dist')
      },
      {
        context: path.resolve(__dirname, '../src'),
        from: '**/*.png',
        to: path.resolve(__dirname, '../dist')
      },
      {
        context: path.resolve(__dirname, '../src'),
        from: '**/*.gif',
        to: path.resolve(__dirname, '../dist')
      },
      {
        context: path.resolve(__dirname, '../src'),
        from: '**/*.jpeg',
        to: path.resolve(__dirname, '../dist')
      },
      {
        context: path.resolve(__dirname, '../src'),
        from: '**/*.svg',
        to: path.resolve(__dirname, '../dist')
      }
    ])
  ]
};

module.exports = baseConfig;
