const TerserPlugin = require('terser-webpack-plugin');

const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');
const PRODUCTION_PATH_PREFIX = '/DoubleOrNothing-Frontend/';

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'bundle.min.js',
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
});
