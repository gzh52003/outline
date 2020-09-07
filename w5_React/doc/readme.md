# React

## day6-1

### 面试题
* hash路由的原理
    * hashchange
* 如何路由懒加载
    * 用于优化，可以减少打包文件大小，提升首次加载速度
    * 原理：组件动态加载（也叫按需加载）
* 常用的http状态码
    * 200+
        * 200   成功
    * 300+
        * 301   永久重定向
        * 302   临时重定向
        * 304   缓存
    * 400+
        * 401   无权限，需要登录才可访问
        * 402   未支付无权限
        * 403   禁止访问，无权限
        * 404   找不到资源
    * 500+
        * 500   服务器错误

### 知识点

* 前端三大框架
    * Angular
    * React
    * Vue
        * 指令
        * 组件

* 版本概念
    * cjs   commonJS
    * umd   Universal Module Definition， commonJS/amd/cmd/全局引入
    * es    esModule

* 创建虚拟节点：React.createElement(type,prop,children)
* 渲染虚拟DOM：ReactDOM.render(VirtualDOM,target)
* JSX
    * 浏览器不支持，需要使用babel工具进行编译成浏览器支持的代码
    * babel的作用：JSX -> React.createElement()
    * JSX规范
        * js关键字不能使用：
            * class -> className
            * for   -> htmlFor
        * 属性使用驼峰写法
            * autofous  -> autoFocus
            * tabindex  -> tabIndex
            * onkeyup   -> onKeyUp
        * 必须结束标签
        * 在JSX中使用js代码，必须写到花括号中{}
        * style 属性的值接收一个对象，css 的属性必须为驼峰写法

* 组件化开发
    > 简单理解为：创建了一个html标签
    * 解决的问题
        * 复用
        * 维护
    * 定义组件
        * 函数组件
            必须有返回值
        * 类组件
            必须包含render方法，且render方法必须有返回值
    * 使用组件

* Webpack
    * gulp: 基于任务的构建工具
        * 创建gulpfile.js文件
        * 创建任务
            * 在任务中逐步编写规则实现不同的功能
        * 运行任务
    * webpack: 基于配置的构建工具
        * 在项目跟目录下创建一个`webpack.config.js`，所有的配置规则都写到该文件中，文件内部返回一个commonJS模块