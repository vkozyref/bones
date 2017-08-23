const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const config = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          use: [{ loader: 'css-loader', options: { minimize: true } }, 'sass-loader'],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextWebpackPlugin('[contenthash].style.css'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
};

module.exports = config;
