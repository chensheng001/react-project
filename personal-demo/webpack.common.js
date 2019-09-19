
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除之前打包结果

module.exports = {
  devtool: 'eval-source-map', //生成Source Maps（使调试更容易）
  entry: [
    'react-hot-loader/patch',
    __dirname + '/src/index.js', //人口文件
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "[name].[hash].js"//打包后输出文件的文件名
  },
  //配置babel
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {

          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              /*modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },*/
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  //插件
  plugins: [
    new CleanWebpackPlugin(),
    //以该文件下的本地index.html作为模板,打包的时候自动生成服务器html并自动引入打包的js文件
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html"//new 一个这个插件的实例，并传入相关的参数
    }),
  ],
};