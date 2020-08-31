# Vue

## day2-4

### 面试题
* 如何解决浏览器缓存引起的问题
```js
    <script src="js/common.js?2345"></script>
```

### 了解Vue
* 前端框架发展历程
    * ...
    * Jquery: 2006
        * 特点：简单易容，简化节点操作
    * Angular:2009
        * 特点：MVC模式，双向数据绑定，依赖注入
    * React:2013
        * 特点：高性能，虚拟DOM（virtual DOM），性能上碾轧angularJS
    * Vue: 2014
        * 作者：尤雨溪（Evan You），综合了ng和React的特点，并做了相应优化

* Vue的使用
    * 版本
        * development   开发环境
        * production    生产环境
    * 数据绑定
        * 单向数据绑定
            * {{}}      等效于v-text
            * v-text    把html当文本处理
            * v-html    解析html
            * v-bind    给属性绑定数据
        * 双向数据绑定
            * v-model
    * 数据驱动
        > 学习Vue后要改变以前的思维模式：通过数据修改驱动视图更新


* vue指令（具有特殊功能的自定义html属性）
    * v-for：用于遍历数据
        > 格式： v-for="item in data"
    * v-bind：用于动态绑定数据，简写：:
        > 格式：v-bind:属性="变量"
        ```html
            <div class="box"></div>
            <div v-bind:class=""></div>
        ```
    * v-on：用户绑定事件
        > 格式：v-on:事件类型="事件处理函数"，简写：@
        * 修饰符：
    * v-show: 是否显示（条件成立显示，否则隐藏）
        > 格式：v-show="条件"
    * v-if/v-else/v-if-else：是否显示（条件成立创建，否则销毁）
        > 格式：v-if="条件"
    * v-model：双向数据绑定，一般用于表单元素
        > 格式：v-model="数据"

* 实例化配置参数
    * el        挂载
    * data      数据
    * methods   方法


## day2-5

### 复习
* Vue指令
    * v-for     列表循环
    ```js
        data = [10,20];
        <div v-for="item,idx in data">
        data2 = {a:10,b:20}
        <div v-for="val,key in data">
    ```
    * v-text
    * v-html    
    * v-bind    动态绑定属性    简写： :
    * v-on      绑定事件        简写：@
        * 修饰符
    * v-show
    * v-if/v-else/v-else-if
* 数据绑定
    * 单向
        * {{}}
        * v-text
        * v-html
        * v-bind
        ```js
            <div v-text="data" v-html="data">{{data}}</div>
            data = 'info'
            <div class="goods" v-bind:class="data"></div>
            <div class="goods info"></div>
        ```
    * 双向
        * v-model
* 架构模式
    * MVC
    * MVP
    * MVVM
* 响应式属性的原理
    * getter&setter
    * 属性特性
        * 值属性
        * 存储器属性
        * 获取属性特性：
            * Object.getOwnPropertyDescriptor(target,pro)
            * Object.getOwnPropertyDescriptors(target)
        * 设置属性特性：
            * Object.defineProperty(target,pro,descriptor)
            * Object.defineProperties(target,descriptor)
            ```js
                let data = {}
                Object.defineProperties(data,{
                    a: {
                        writable:true,
                        value:10
                    },
                    b:{
                        enumerable:true,
                        get(){
                            return 100
                        },
                        set(newVal){

                        }
                    }
                })
            ```

### 知识点
* 配置参数
    * el
    * data
    * computed
    * methods
    * template
        * 格式
        * 高亮
        * 只能有一个根元素
    * components    定义局部组件

#### 组件Component

* 组件的优点
    * 复用
    * 维护
* 组件的定义
    > 组件就是一个封装了具有某些功能的自定义标签（创建一个标签）
    * 全局组件：在任何地方都能使用
        > 
    * 局部组件：只有在特定位置使用
* 组件的使用
    > 注意：不能有大写
    
* 组件通讯
    > 数据修改原则：谁的数据谁修改
    * 父->子：props
        1. 父组件操作：给子组件设置属性，并传值
        2. 子组件操作：通过`props`接收属性
    * 子->父
        * 复杂数据
            1. 父组件操作：给子组件自定义事件(add)
            2. 子组件操作：通过`this.$emit('add',参数)`
        * 简单数据
            1. 父组件操作：给子组件绑定数据` v-bind:xxx.sync="数据"`
            2. 子组件操作：`this.$emit('update:xxx',修改的值)`
    * 兄弟1->兄弟2
        1. 兄弟1->父组件
        2. 父组件->兄弟2

    * 多层次组件通讯

## day3-1

### 面试题
* 在父子组件通讯过程中，子组件的哪个生命周期函数最先获取到props数据
    > 答案：created
* 页面事件
```js
    window.onload = ()=>{
        // 等页面所有内容（图片等资源文件）下载完成后执行
    }

    jQuery(function(){

    })

    document.onreadystatechange = (){
        if(document.readyState === 'interactive'){
            // 等效于DOMContentLoaded
        }else if(document.readyState === 'complete'){
            // 等效于window.onload
        }
    }
    document.addEventListener('DOMContentLoaded',()=>{

    })
```

### 复习
* 组件
    * 全局：Vue.component(name,options)
    * 局部：components
* 组件通讯
    * 父->子：props
        1. 父组件操作：给子组件传递属性
        2. 子组件操作：通过props接收
        > tips: 如果省略第2步，属性会自动写入组件根元素
    * 子->父：自定义事件+$emit触发
        1. 父组件操作：给子组件定义事件(并绑定事件处理函数)
        2. 子组件操作：触发事件（this.$emit(自定义事件,参数)）

        > 简写：
            1. 父组件操作：v-bind:myage.sync="age"
            2. 子组件操作：this.$emit('update:myage',20)
    * 兄弟->兄弟

### 知识点
* 多层次组件通讯
    * 逐层传递（不推荐）
    * 事件总线Bus：自定义事件+$emit触发
        > 利用Vue实例事件来传递数据的方式
        * 搞懂几个事情
            * 每个组件都是一个vue的实例
            * 实例都可以自定事件和触发
                ```js
                    实例.$on(); // 绑定事件
                    实例.$emit() // 触发事件
                ```
        * 执行步骤
            1. 定义总线Bus
                > Bus为Vue实例，所有组件必须能访问
            2. 接收方定义事件
                > 一般在组件生命周期函数中定义事件
            3. 发送方触发事件
* 插槽内容
    * 父->子：插槽
        * 默认插槽：没有名字，用于显示组件标签中的内容
        * 命名插槽：有名字的插槽，同`v-slot:插槽名`指定在某个插槽中显示
    * 子->父: 作用域插槽
        1. 子组件操作：给slot设置属性
        2. 给`v-slot`设置属性值
            ```js
                <template v-slot:en="enProps">
            ```
* Vue内置组件
    * slot  插槽：用于显示组件标签中的内容
* 指令
    * v-slot

* Vue组件生命周期
    > 从创建到销毁的过程
    * 阶段
        * 创建阶段: Create
            * beforeCreate
            * created
        * 挂载阶段: Mount
            * beforeMount
            * mounted
        * 更新阶段: Update
            * beforeUpdate
            * updated
        * 销毁阶段: Destroy
            * beforeDestroy
            * destroyed
    * 生命周期函数（钩子函数）
        > 经历到某个阶段自动执行的函数


    ```js
        new Vue({
            data,
            computed,
            methods
        })

    ```

### Vue单文件组件
> 组件的html,js,css组合到一个文件中，方便管理与维护，后缀名为`.vue`的文件

* 结构如下
```js
    <template>
        // 组件的结构：html
    </template>
    <script>
        // 组件的js代码：配置、生命周期函数等
    </script>
    <style>
        // 组件的样式：css
    </style>
```

### ESModule
* 模块化开发
    * commonJS  后端
        ```js
            const express = require('express');

            module.exports = Router
            // exports.xxx = 
        ```
    * AMD   require.js
    * CMD   sea.js
    * ESModule
* 基本特点
    1. 一个文件为一个模块
    2. 每个模块只加载一次，多次引入会自动从内存中获取
    3. import导入，export导出
    4. import为静态导入

* 语法
    * 导入：import
        > 格式：import xxx from url
        * 得到模块对象中的default属性
        * 导入时更改变量名：as
        ```js
            import {getData as get} from 'xxx'
        ```
    * 导出: export
        > 导出 export 后自能跟var,let,const,function,class,default,{}

## day3-2

### 面试题
* ESModule规范中对url路径的要求

* 对组合标签封装组件导致浏览器解析错误的问题
* v-model的替代方案
    * v-bind:value  model->view
    * v-on:input    view->model
    ```js
        <input v-model="username" />
        <input v-bind:value="username" v-on:input="changeUasername">

        methods:{
            changeUsername(e){
                this.username = e.target.value
            }
        }
    ```
* v-html有哪些风险
    > 只渲染信任的内容
    * xss 跨域脚本攻击
        * 如何规避
            * 对用户的输入进行过滤处理，如：script,style,a,iframe...
* event对象target与currentTarget的区别
    * target        触发事件的元素
    * currentTarget 绑定事件的元素
    * 事件触发阶段
        1. 捕获阶段
        2. 触发阶段
        3. 冒泡阶段


    三段论：
        1. 给出一个前提条件         金属能导电          
        2. 给出一个已知条件         我是金属做得        
        3. 得到一个结论             我能导电


### 知识点
* 多页面应用：MPA（Multiple Page Application）
    > 整个应用具有多个页面，页面间通过a标签跳转
* 单页面应用：SPA （Single Page Application）
    > 整个应用只有一个页面，页面间通过路由进行跳转

#### VueRouter
Vue-Router允许我们通过不同的 URL 访问不同的内容。 可以实现多视图的单页Web应用
* 使用步骤
    1. 引入vue-router
    ```js
        import VueRouter from 'vue-router'
    ```
    2. 使用vue-router
    ```js
        Vue.use(VueRouter)
    ```
    3. 实例化router并配置参数
    ```js
        import Home from './pages/Home.vue';
        import User from './pages/User.vue';
        const router = new VueRouter({
            // 配置路由规则
            routes:[{
                // 当浏览器url地址为/home时，显示Home组件的内容
                path:'/home',
                component:Home
            },{
                path:'/user',
                component:User
            }]
        })
    ```
    4. 把router实例注入到vue实例中
    ```js
        new Vue({
            router,
            render: h => h(App),
        }).$mount('#app')

    ```

* 配置参数
    * mode：路由模式
        * hash      hash路由（默认）
        * history   history路由

* 显示路由内容
    > 通过VueRouter内置组件`<router-view/>`来实现
* 路由跳转
    * 声明式导航：利用内置组件`<router-link/>`实现跳转
    * 编程式导航：利用js实现跳转
        * $router：路由实例，一般用于跳转
            * push()
            * replace()
            * go()/back()/forward()


#### UI框架
> 封装了大量的组件供我们使用
* elementUI     饿了么
* vantUI        有赞
* iView         腾讯
* ant-design    阿里
....

## day3-3

### 面试题
* websocket心跳包
    > 作用：用来判断客户端与服务端是否断开
* 如何设置Vue的响应式属性
    * 配置data
    ```js
        const vm = new Vue({
            data:{
                score:{
                    englisht:100,
                    math:99
                }
            }
        })

        //vm.score.chinese = 120; // chinese为非响应式属性
        Vue.set(target,prop,value) // target不能为实例,也不能为根数据属性$data
        Vue.set(vm,'username','laoxie');// 报错
        Vue.set(vm.$data,'username','laoxie');// 报错

        //vm.$set();
        //this.$set();
    ```
* get/post/delete/put/patch的区别
    * RESTful
        * get: 查询（不应该有任何数据修改）
        * post: 增加
        * put/patch: 修改
        * delete: 删除
* 给chrome浏览器设置小于12px的字体大小
    * text-size-adjust
    * transform:scale()
* before/after伪元素选择器双冒号与单冒号的区别
    * 伪元素：需要添加一个元素才能达到的效果,before,after,first-line,first-letter,root...
    * 伪类：需要添加一个类就能达到的效果
    ```css
        tr:nth-child(even){background-color:#efefef;}
        tr.even{}

        <span class="price"><span>￥</span>998</span>
        <span class="price">998</span>
        <span class="price">998</span>
        .price::before{
            content:'￥',
            color:#f00
        }
    ```
* Vue的组件通讯
    * 父->子：props
    * 子->父：事件
    * 兄弟->兄弟
    * 跨组件通讯：Bus事件总线

### 知识点
* key的作用
    > Vue识别DOM节点的一个通用机制，一般用户同级别同类型的节点
    * key值必须是唯一且稳定的数据
    * 虚拟DOM （Virtual DOM）
        > 是一个结构类似与真实DOM的js对象 `{props:value}`
        * 为什么虚拟DOM能提高页面性能
            * 减少DOM节点操作
            * 对虚拟DOM的前后状态进行对比
            
        ```js
            const vmStart = {
                type:'div',
                props:{id:'datalist'},
                children:[
                    {
                    type:'h1'
                    props:null,
                    children:'xxx'
                },{
                    type:'ul',
                    props:null,
                    chilren:[{
                        type:'li',
                        children:'text'
                    },{
                        type:'li',
                        children:'text'
                    },{
                        type:'li',
                        children:'text'
                    }]
                }]
            }

        const vmEnd = {
                type:'div',
                props:{id:'datalist'},
                children:[{
                    type:'h1'
                    props:null,
                    children:'xxx'
                },{
                    type:'ul',
                    props:null,
                    chilren:[{
                        type:'li',
                        children:'text1'
                    },{
                        type:'li',
                        children:'text'
                    },{
                        type:'li',
                        children:'text'
                    }]
                }]
            }

        // 减少节点操作
        app.innerText = 10;
        app.innerText = 11;
        app.innerText = 12;
        app.innerText = 10;
        ```
* 路由传参
    * $router：路由实例，一般用于跳转
    * $route：当前路由信息，一般用户获取路由传递的参数
    * 动态路由
        * 获取传递的参数：

* ref
    * 给元素设置ref属性，通过this.$refs.xxx得到的是元素节点
    * 给组件设置ref属性，通过this.$refs.xxx得到的是组件实例

### 项目
* 要求
    * 数据：爬
    * 接口：nodejs+express+mongo
    * 后台管理系统
* github
    1. 注册账户，把账号写入文档（邀请到github组织）
    2. 创建team，并添加团队成员 
    3. 创建仓库，添加权限（把团队设置为可读写权限）
    4. 初始化项目，安装依赖
        * 添加.gitignore
    5. 推送到github,其他成员clone
    
* git分支
    > 不要直接在master分支上修改
    * dev   开发分支
    * 遇到冲突，一定要两个人共同解决

* 团队
    * 分工
        * 爬数据
        * 写接口+接口文档
        * 后台管理系统
### 接口文档
    链接：https://easydoc.xyz/s/58934052      密码：4wSFKBYp


## day4-4

### 知识点
* watch监听数据修改
    > 监听实例属性，可进行深度监听
    ```js
        // 配置参数
        {
            watch:{
                $route(){}
            }
        }

        // 利用实例方法
        this.$watch('$route',function(){})
        
    ```
    * 应用
        * 滚动加载
        * 监听用户信息修改，自动保存本地
        * ....

* 路由守卫
    > 作用：监听路由变化
    * 全局守卫
        > 所有的路由切换都会执行，一般写在路由配置文件中，为路由实例的方法
        * router.beforeEach(fn)
        * router.router.afterEach(fn)
    * 路由独享的守卫
        > 写在路由配置中
    * 组件内的守卫
        > 写在路由组件中
        * beforeRouteEnter
        * beforeRouteUpdate
        * beforeRouteLeave

* 路由详细过程
    > 12步
    * 失活组件：from
    * 激活组件：to


## day4-5

### 复习
* 团队项目遇到的问题
    * 沟通
    * git：分布式
        * 分支
            * master    用于发布版本（专人负责）
            * dev       开发分支
            * release   未测试的正式版本，这里的代码来自dev
            * hotfix    紧急bug修复分支
            * 个人分支
    * svn: 集中式
* 专业术语
    * mr
    * 版本号：1.2.3 -> 1.2.4
    * 静默登录

### 复习
* 路由守卫
    * 全局守卫
    * 组件守卫
    * 路由独享
* 页面切换的步骤
* 页面访问权限控制

### 知识点
* scoped样式
    > 组件样式/局部样式
    * 原理: 属性选择器
        1. 给**当前组件的所有元素**添加一个自定义属性`data-v-[hash]`
        2. 利用css属性选择器匹配元素

## day5-1

### 面试题
* computed与methods
```js
    <div>
        {{getTime1}}
        {{getTime2()}}
    </div>
    new Vue({
        data:{
            date:10,
        },
        props:[],
        computed:{
            getTime1(){
                // getter
                return this.date
            }
        },
        methods:{
            getTime2(){
                // 方法
            }
        }
    })
```

### 知识点

### 内置组件
> Vue定义好的组件
* component 动态组件
* keep-alive
* slot
* transition/transition-group

### 自定义指令
> 定义一个属性
* 全局指令：Vue.directive()
* 局部指令: directives

### mixin
> 提取组件公共代码，便于复用与维护
* 全局
* 局部