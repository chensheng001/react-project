const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      }
    }),
    new InterpolateHtmlPlugin({
      NODE_ENV:'"development"',
      PUBLIC_URL:''
    }),
  ],
  //构建本地服务器
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: false,//不跳转
    inline: true, //实时刷新
    hot: true,
    port: 5005,
    host: 'localhost',
    //解决跨域
    proxy: {
      '/account/api': {
        target: 'http://192.168.211.72',
        secure: false, // 接受 运行在 https 上的服务
      },
      '/sdwan/api': {
        target: 'http://192.168.211.72',
        secure: false, // 接受 运行在 https 上的服务
      }
    }
  }
});