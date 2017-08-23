const config = {
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};

module.exports = config;

