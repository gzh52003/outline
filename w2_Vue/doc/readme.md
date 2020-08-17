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
            * 命名插槽：有名字的插槽，同`v-slot:插槽名`指定在某个插槽中显示
            * 默认插槽：没有名字，用于显示组件标签中的内容
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

* 生命周期函数
    * mounted()