# NodeJS


# Day1-1

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



# Day1-2

## 面试题
* event
    * target            触发事件的元素
    * currentTarget     绑定事件的元素

    ```html
        <table onclick="">
            <tr>
                <td></td>
            </tr>
        </table>
    ```
* ES5：2009
* ES6新特性：ES 2015
    * let/const
    * 解构
    * 扩展运算符
    * 箭头函数
    * Promise
    * class
    * 对象简写
    * 模板字符串
    * for...of
    * Set/Map
    * ES Module
* ES7:ES 2016
    * Array.prototype.includes
    * 2**16

    ```js
        const arr = [10,20,30,NaN]
        arr.indexOf(20);//1
        if(arr.indexOf(20)>=0){

        }
    ```
* ES8: ES 2017
    * async/await

* 改变this指向的方式
    * fn.call(target,a,b,c,...)       改变fn的this指向并执行fn，参数为任意数量
    * fn.apply(target,[a,b,c,...])      改变fn的this指向并执行fn，参数只能为一个数组
    * fn.bind(target)       改变fn的this指向，返回一个函数
    ```js
        function test(a,b){
            console.log(this);
        }
        test(10,20);// window
        test.call(document,10,20);//document
        test.apply(document,arguments);//document
        const fn = test.bind(document);
        fn();// document
    ```
## 复习
* 前端后端请求理解
* 静态资源服务器
* 模块化
    * 规范
        * CommonJS      NodeJS      同步
        ```js
            const expres = require('express');
            const app = express();
        ```
        * AMD           require.js  异步
        * CMD           sea.js      异步
        ```js
            require(['jquery'],function($){
                $('.box')
            })
        ```
        * ESModule      ES6         同步
        ```js
            import xxx from './module/xxx.js'
        ```
* express
    * 中间件：一个函数
        * 分类
            * 内置中间件
            * 自定义中间件
            * 第三方中间件
        * 使用
            > 格式：xxx.use([path],middleware,...)


## 知识点
* 接口编写（RESTful Api规范）
    1. 根据不同的请求类型实现不同的接口
        * get       查
        * post      增
        * put       改（覆盖）
        * patch     改（修改部分）
        * delete    删
    2. 根据不同的地址实现不同的接口

* 获取请求参数
    * url地址：get
        > 通过req.query获取
    ```js
        // get /goods?page=1&size=10
    ```
    * 请求体
        > 通过req.body获取，前提使用相应中间件格式化参数
    * 动态路由
        > 通过req.params获取

* 模块化路由
    * express.Router()


## 跨域解决方案
> js是一门客户端语言：在客户端执行的语言

* jsonp     需要服务器的支持
* CORS      Cross Origin Resource Sharing   需要服务器的支持
* 服务器代理
    > 目标服务器有接口，但没有权限
