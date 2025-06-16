const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
};

module.exports = merge(baseConfig, devConfig); 