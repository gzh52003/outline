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