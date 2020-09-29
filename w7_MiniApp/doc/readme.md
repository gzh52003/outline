# 微信小程序

## day8-1

### 介绍

### 准备工作
* 注册账户
* 填写资料
* 下载工具

### 文件类型
* 文件分类
    * json      配置文件
    * wxml      结构文件
    * wxss      样式文件
    * js        逻辑文件
    * wxs       模块化脚本文件
* 作用分类
    * 全局文件
    * 页面级别文件
    * 项目配置文件：project.config.json

* json配置
* wxml结构文件
    * 数据绑定
        * 单向: {{}}
        * 双向
            * 单向+事件
            * model:attr="{{value}}"
        * 列表渲染: wx:for
            * wx:for-item
            * wx:for-index
            * wx:key
                * item下的**属性名**
                * `*this`代表item本身
        * 条件渲染
            * wx:if
            * wx:elif
            * wx:else
    * 事件绑定
        * bind事件名: bind:事件名
        * 移动端事件类型
            * click事件在移动端有300ms延迟
                * 两次点击为放大
                * click穿透
            * touch
                * touchstart
                * touchend
                * touchmove
            * 手势
                * tap       在移动端替代click
                * longtap
                * swipe
* wxss样式文件
* js逻辑文件
    * 应用：App(options)
    * 页面: Page(options)
        * data
            * 获取：this.data.xxx
            * 修改：this.setData()

### 生命周期函数
* 页面生命周期函数
    * onLoad
    * onReady
    * onShow
    * onHide
    * onUnload
* 应用生命周期函数
    * onLaunch
    * onShow
    * onHide

## ui框架（样式框架，）
* weui
* vant-weapp


## day8-2

### 复习
* 小程序开发与web开发的区别
* 如何开发微信小程序
    * 技术
        * html+css+js
        * vue
        * react
    * 文件类型
        * json  配置文件
        * wxml  结构文件
        * wxss  样式文件
        * js    逻辑逻辑
        * wxs   模块化脚本
    * 作用范围
        * 全局文件
        * 页面级别文件
    
* 页面数据渲染：在wxml中使用
    * 数据绑定
        * 单向绑定：{{}}
        * 双向绑定
            * 单向+事件
            * model:attr="{{value}}"
    * 列表渲染
        * wx:for
            * item
            * index
        * wx:for-item
        * wx:for-index
        * wx:key
            * 属性名
            * *this
    * 条件渲染
        * wx:if
        * wx:elif
        * wx:else
    * 事件绑定
        * 格式: bind:事件类型="事件处理函数"
* 逻辑文件：在js中使用
    * 应用逻辑：App(options)
        * 生命周期函数
            * onLaunch
            * onShow
            * onHide
    * 页面逻辑：Page(options)
        * data
        * 生命周期函数
            * onLoad
            * onReady
            * onShow
            * onHide
            * onUnload
        * 事件函数
    * 组件逻辑：Component(options)


### 知识点
* 常用组件

* 页面跳转
    * 页面分类
        * tabbar页面
        * 普通页面
    * 跳转方式
        * 组件：navigator
            * open-type
        * 接口：
            * wx.switchTab      跳转到tabbar页面
            * wx.reLaunch       跳转到任意页面（关闭当前页面）
            * wx.redirectTo     跳转到普通页面（关闭当前页面）
            * wx.navigateTo     跳转到普通页面（保留当前页面）
            * wx.navigateBack   返回上一页面（关闭当前页面）

* 自定义组件：Component(options)

* 自定义tabbar

* 使用第三方组件库
    > 小程序默认不能使用npm模块，需要进行编译
    * weui-miniprogram
        1. 安装：`npm i weui-miniprogram`
        2. 构建编译npm模块
        3. 