process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
require('react-scripts/config/env');
const configFactory = require('react-scripts/config/webpack.config');
const webpack = require('webpack');
const conf = configFactory('production');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

conf.entry = [path.resolve('./src/umd.js')];
// remove chunks
conf.optimization = {};
conf.output = {
  path: path.resolve('./build'),
  library: 'OgSelfService',
  filename: 'umd/[name].js',
  libraryTarget: 'umd',
  publicPath: '/',
  jsonpFunction: 'customOneMe'
};

// replace MiniCssExtractPlugin to not hash assets
conf.plugins[5] = new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: 'umd/[name].css'
});
// conf.module.rules[2].oneOf = conf.module.rules[2].oneOf.map(it => {
//   const ret = { ...it };
//   if (it.use) ret.use = it.use.filter(({ loader }) => !loader.match('mini-css-extract-plugin'));
//   return ret;
// });
// const util = require('util');
// console.log(util.inspect(conf.module.rules[2].oneOf, false, null, true /* enable colors */));
// webpack(conf, function(err, stats) {
//   //   console.log(stats);
// });
module.exports = conf;
