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


## day1-3

### 面试题
* 专业术语
    * 阻塞
    * production    生产环境
    * development   开发环境
* 你对原型链的理解
    对象到Object.prototype之间的链条

### 复习
* 模块化路由
    * 内置中间件：express.Router() 
    ```js
        // server.js
        const express = require('express');
        const app = express();
        const allRouter = require('./router')
        app.use('/api',allRouter)
        app.listen(2003)


        // index.js
        const goodsRouter = require('./goods');
        const userRouter = require('./user');

        // 数据接口
        app.use('/goods',goodsRouter)
        app.use('/user',userRouter)


        // goods.js
        const router = express.Router();
        router.get('/goods',(req,res)=>{

        })
        module.exports = router;


        // html
        xhr.open('get','http://localhost:2003/api/goods')
    ```
* 接收参数
    * url参数：get
    * 请求体: post
    * 动态路由:
* 跨域解决方案
    * jsonp
    * cors
    * 服务器代理proxy

### 知识点
* jsonp
    > 原理：利用script没有跨域限制的特点，请求接口并返回数据
    * 利用script标签请求数据
    ```html
        <script src="http://localhost:20030/jsonp"></script>
    ```
    * 注意点
        * 定义**全局函数名**，并传递到后端
        * 需要服务器的支持
            * 返回js代码（执行函数，并传递数据）
* 服务器代理
> 适合场景：目标服务器有接口，但没有权限访问


#### 页面渲染模式
* 客户端渲染（BSR：Browser Side Render）
    * 步骤
        1. 请求html页面（空页面）
        2. 浏览器渲染html页面
        3. ajax请求数据
        4. 遍历数据并渲染到html页面
    * 优点
        * 前后端分离
        * 用户体验好
    * 缺点
        * 对SEO（搜索引擎优化）不友好
* 服务端渲染（SSR：Server Side Render）
    * 步骤
        1. 请求html页面（包含数据的html结构）
        2. 浏览器渲染html页面
    * 优点
        * 速度快
        * 对SEO友好
    * 缺点
        * 前后端不分离，对程序员要求较高
        * 用户体验不够好

#### 爬虫
> 使用场景：目标服务器无接口，采用SSR方式渲染的网站

1. 分析html结构，找出需要爬取的区域特点
2. 使用特定工具
    * request   用于获取目标html结构
    * cheerio   用户过滤和获取数据（一个类似与jquery的工具）
3. 把得到的数据写入数据库
4. 下载图片到本地

爬取目标网页：http://store.lining.com/shop/goodsCate-sale,desc,1,15s15_122,15_122_m,15_122_ls15_122_10,15_122_10_m,15_122_10_l-0-0-15_122_10,15_122_10_m,15_122_10_l-0s0-0-0-min,max-0.html


#### stream数据流
* fs.readFile()
* fs.createReadStream() 读取文件流
* fs.createWriteStream() 写入文件流


## day1-4

### 复习
* 跨域解决方案
    * cors  
    * jsonp
    * 服务器代理

* 请求与响应
    * 请求：客户端->服务端
    * 相应：服务端->客户端
* 渲染模式
    * 客户端渲染：BSR
    * 服务端渲染：SSR
* 爬虫
    > 分析html结构
    * request
    * cheerio

    * 爬取文本信息
    * 爬取文件、多媒体等
* stream（液体）
    * fs模块
        * 普通文件
            * fs.readFile()    读取文件
            * fs.writeFile()   写入文件
    * 大文件
        * fs.createReadStream(path[, options])
        * fs.createWriteStream(path[, options])

* Buffer： 二进制数据
* base64
    ```html

        <img src="xxx.jpg" />
        <img src="[base64]" />
    ```


### 数据库

#### mySQL
1. 配置数据库
    * 连接对象
    ```js
        const connection = mysql.createConnection()
    ```
2. 连接数据库
    ```js
        connection.connect();
    ```
3. 操作数据库
    * CRUD 增删改查
    ```js
        connection.query(sql)
    ```
4. 关闭连接
    ```js
        connection.end();
    ```


* ES8
    * async & await : 用来简化promise的操作
        * await 后必须为promise对象，等待promise对象的状态为Resolved后的返回结果
        * await不能单独使用，必须放在async函数中

