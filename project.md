- crc
 + api ajax请求相关模块文件夹
 + assets 共用资源文件夹
 + components UI组件模块文件夹
 + containers 容器组件模块文件夹
 + redux redux相关模块文件夹
 + utils 工具模块文件夹
 + index.js 入口js

 ## 组件的按需打包
 - 1. 下载依赖模块 npm i --save-dev babel-plugin-import react-app-rewired
 - 2. 定义加载配置的js模块 config-overrides.js
 ```
 const { injectBabelPlugin} = require('react-app-rewired')
 module.exports = function override(config, env){
    config = injectBabelPlugin(['import', {libraryName: 'antd-mobile', style:'css'}], config);
    return config;
 }
 ```
 - 3. 修改配置 package.json
 ```
 "scripts" :{
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-scripts eject"
 }
 ```
 ## 踩坑 
 - react-app-rewired的1点几版本可以，2点几版本要install customize-cra,具体看https://github.com/ant-design/antd-mobile-samples/blob/master/create-react-app/config-overrides.js

 # 自定义主题
 - 依赖模块 npm install --save-dev less@2.7.3 less-loader
 - 配置config-overrides.js

 # 配置路由
 npm install --save react-router-dom
 - 一般在containers里面定义路由

 # 引入redux
 npm install --save redux@3.7.2 react-redux redux-thunk
 npm install --save-dev redux-devtools-extension

# 组件是放在components还是containers
若需要交互，就放在containers
