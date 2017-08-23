const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const commonPath = require('./commonPath');

module.exports = {
  entry: ['./src/index.js', './src/style/index.scss'],
  output: {
    filename: '[chunkhash].bundle.js',
    path: commonPath.outputPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      fileName: 'index.html',
      title: 'Bone',
      inject: 'body',
    }),
    new FaviconsWebpackPlugin({
      logo: './src/favicon.png',
      inject: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: true,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: true,
        windows: true,
      },
    }),
    new WebpackCleanupPlugin(),
  ],
};
