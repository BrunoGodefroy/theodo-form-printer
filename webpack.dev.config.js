const original = require('./webpack.config.js');
const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
  ].concat(original.entry),
  output: original.output,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
  ],
  resolve: original.resolve,
  module: original.module
};
