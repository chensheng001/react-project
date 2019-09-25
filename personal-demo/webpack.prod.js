const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const InterpolateHtmlPlugin = require('interpolate-html-plugin'); //index.html使用公共文件夹变量
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new InterpolateHtmlPlugin({
      NODE_ENV:'"development"',
      PUBLIC_URL:'/myapp/public'
    }),
    new CopyPlugin([
      {
        from: 'public/**/*',
        to: './',
        ignore: ['index.html'],
      },
    ]),
  ]
});