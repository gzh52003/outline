# NodeJS


## 模块化规范
* AMD
* CMD
* CommonJS
* ESModule

### 好处
* 分工
* 维护

### 分类
框架            规范
* request.js    AMD
* sea.js        CMD
* nodejs        CommonJS
* ES6           ES Module


## CommonJS模块化分类
* 内置模块
    > 不需要安装，直接引用
* 自定义模块
    * 定义模块：nodejs把一个文件当作一个模块
        * module.exports
    * 引用模块：然后通过`require()`方法进行引用
        * 文件
        * 目录
            1. 查找目录下是否存在package.json，如存在，则查看是否有`main`属性
            2. 如没有main属性，则查找index.js
            3. 如没有index.js，则报`module xxx is not found`
* 第三方模块
    1. 安装： 
        * `npm install xxx`
        * `yarn add xxx`
        * `cnpm install xxx`
    2. 引用：类似于内置模块
    ```js
        // npm i express
        const express = require('express'); // require会自动从node_modules目录下查找
        const http = require('http')
    ```


## Express

### 中间件(middleware)
> 在某些操作到达目的前进行拦截处理，在express中，**中间件是一个函数**

* 使用中间件: `app.use([path],...中间件)`
```js
    app.use(express.static('./'))
```

* 中间件分类
    * 内置中间件
        * express.static()  静态资源服务器
        * express.json()
        * express.Router()
    * 自定中间件
        * request
        * response
        * next()    是否执行下一个中间件
    ```js
        function myMiddleware(){

        }
    ```


## 练习
* 编写电商接口
    * 获取所有商品： `get /goods`
    * 获取单个商品： `get /goods/:id`
    * 注册：`post /reg`
    * 登录：`post /login`