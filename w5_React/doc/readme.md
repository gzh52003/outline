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

## day6-2

### 面试题
* webpack常用配置
* 局部样式的原理
    > 添加scoped
    1. 给当前组件的元素添加data-v-[hash]
    2. css属性选择器: .el-button[data-v-xxxx]{}

    * 在局部样式中修改第三方组件样式
        * /deep/
        * >>>
        * 添加一个不带scoped的style
* 单页面应用的原理
    * hash
    * history
        * state
        * pushState()
        * replaceState()
* 有两条分布不均匀的绳子，每条烧完需要1个小时，如何确定15分钟

### 复习
* webpack与gulp的区别
    * gulp：基于任务的构建工具
    * webpack：基于配置的构建工具
* webpack的常用配置
    > 手动搭建基于webpack的React开发环境
    * entry     入口
    * devServer 开发服务器
        > webpack-dev-server
    * loader    加载器
        > module.rules
        * test  匹配规则（正则）
        * use   使用加载器
    * plugins   插件
        * html-webpack-plugin
* webpack的工作原理
    > 从入口开始，分析整个项目依赖，并使用加载器/插件编译相应的代码，并构建出一个或多个文件

* React
    * 特点
    * JSX
        * JSX -> React.createElement()
    * 组件
        * 定义
            * 函数组件
            * 类组件
                * 继承自React.Component
                * render
        * 使用
### 知识点
* 函数组件（无状态组件、UI组件） 推荐使用
* 类组件（状态组件、容器组件）
* 数据渲染
    * 显示数据：{}
    * 列表循环
        * map
        * filter
        * ...
    * 事件绑定
        * 改变this指向
            * bind: bind改变函数this指向只在第一次生效
            * 传参
        * event对象
            > 事件处理函数最后一个参数
    * 组件状态：state
        * 修改状态: this.setState()
            > 规则：创建新的数据并覆盖
    * refs
        > ref属性用在html元素上，得到元素节点；ref属性用在组件上，得到组件实例
        * 回调函数（推荐）
        * React.createRef()
            > 获取方式: xxx.current
        * 受控组件与非受控组件
            * 受控组件：把组件的状态与表单元素进行绑定
            * 非受控组件：不使用组件的状态操作表单元素

* 状态提升
    > 把数据提升到多个组件共同的父级

* 组件通讯
    * 父->子：props
        * 父组件操作：定义属性并传递数据
        * 子组件
            * 函数组件：函数的第一个参数为props对象
            * 类组件：this.props

## day6-3

### 复习
* 组件的使用
    * 什么时候用函数组件，什么时候用类组件
        * 函数组件（无状态组件, UI组件）
        * 类组件（状态组件，容器组件）
            * state
    * todolist
* 数据的挂载方式
    * 数据绑定：
        * 单向：{}
        * 双向：
            * value
            * onChange事件
    * 列表循环
        * map()
        * filter()
        * key
    * 事件绑定
        * event: 事件处理函数的最后一个参数
        * this指向：
            * bind(target,...args): 只在第一次生效
        * 传参
    * refs
        * 回调函数
        * React.createRef()
        ```js
            // 字符串
            // 获取：this.refs.xxx（不推荐）
            <input ref="xxx"> 

            // 回调函数（推荐）
            const callback = function(el){
                this.keyword = el
            }
            <input ref={callback} /> 
            
            // React.createRef()
            // 获取：myref.current
            const myref = React.createRef()
            <input ref={myref} /> 
        ```
* 受控组件与非受控组件
    * 受控组件：把state绑定到表单元素的value属性，并绑定onChange事件
    * 非受控组件：表单元素不受state/props控制，通过节点方式获取
        * 原生
        * refs
* state
    > 组件的状态
    * 读取：this.state.xxx
    * 修改：this.setState()
        > 原则：创建新数据并覆盖
* props

### 知识点

* 组件通讯
    * 父子通讯：props
        * 父组件操作：定义属性并传递数据
        * 子组件操作
            * 函数组件：函数的第一个参数
            * 类组件：this.props
    * 子父通讯：把父组件的方法传到子组件去执行并传递参数
        * 父组件操作：定义方法并通过props传入子组件
            > 数据在哪里，就把方法定义在哪里
        * 子组件操作：执行方法并传递参数
    * 多层次组件通讯
        * 逐层传递
        * Context
            1. 创建Contenxt
            2. 父组件操作：Provider共享数据
                * value
            3. 子组件操作：接收数据
                * 函数组件：Consumer
                * 类组件：
                    * Consumer
                    * this.context
