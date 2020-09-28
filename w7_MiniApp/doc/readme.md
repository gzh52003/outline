# 微信小程序

## 介绍

## 准备工作
* 注册账户
* 填写资料
* 下载工具

## 文件类型
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

## 生命周期函数
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

## ui框架（样式框架）
* weui
* vant-weapp