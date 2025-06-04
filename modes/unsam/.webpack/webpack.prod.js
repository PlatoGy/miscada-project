const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const prodConfig = {
  mode: 'production',
  optimization: {
    minimize: true,
  },
};

module.exports = merge(baseConfig, prodConfig); 