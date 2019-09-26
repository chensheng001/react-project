## 技术栈：
    1.webpack打包 (webpack-dev-server构建本地服务器，实现热加载, 设置proxy 跨域请求代理)
    2.  react (v16.9.0)
        react-dom
    3.react-redux(v7.1.1) 状态管理器
    4.react-hot-loader (4.12.13)  实现react组件局部热更新
    5.react 组件懒加载
    6.react-router-dom(v5.0.1) 实现路由
    7.axios封装 做http请求
    8.antd UI框架
    9.less css预处理
    10.ES6 语法
    11.cookies封装，验证http请求	
## 演示

[链接地址](http://49.234.3.245/myapp/#/login)
用户名输入admin，密码随意
    
## 项目运行
    安装：  npm install 或者yarn
    启动：  npm start
    构建：  npm run build
    
## 项目从零搭建
    基于webpack的react项目创建步骤

    1. npm init //生成package.json文件

    2. 创建文件目录，public / index.html , src / index.js(人口)

    3. 创建webpack.config.js 配置webpack

    4. 安装依赖包
        webpack-dev-server  //构建本地服务器
        webpack-merge       //用于区分本地开发和生产环境的配置

    5.Babel的安装与配置
        npm install --save-dev
            babel-core  //核心包
            babel-loader //
            babel-preset-env  // 解析ES6语法
            babel-preset-react  // 解析JSX
            babel-preset-stage-0  //解析箭头函数
            babel-plugin-transform-runtime  解析generator函数 如async  awit ...

    6. 安装react依赖
        react
        react-dom
        react-router-dom

    7. 安装css依赖
        style-loader  //使你能够使用类似@import 和 url(...)的方法实现 require()的功能
        css-loader    //将所有的计算后的样式加入页面中

    8. 安装antd，  babel-plugin-import //按需加载

    9. 安装react-hot-loader   //局部热加载

    10. 封装axios, 配置proxy反向代理请求

    11. 安装redux，react-redux 状态管理
