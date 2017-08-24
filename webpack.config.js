/* eslint-disable import/no-dynamic-require, global-require */

const webpackMerge = require('webpack-merge');

const commonConfig = require('./build-utils/webpack.common');
const define = require('./build-utils/define');

module.exports = (env) => {
  const envLabel = env.env;
  const envConfig = require(`./build-utils/webpack.${envLabel}.js`);
  return webpackMerge(commonConfig, envConfig, define(envLabel));
};
