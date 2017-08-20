const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot-loader', 'babel-loader'], exclude: /node_modules/ },
      { test: /\.jsx$/, loaders: ['react-hot-loader', 'babel-loader'], exclude: /node_modules/ },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  resolve: {
    extensions: ['.js', '.jsx', '.styl']
  }
}