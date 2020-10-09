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
        3. usingComponents引入模块



#### 模块化
* js模块化
    > 符合commonJS规范的模块化
    * 导入
        * require()
    * 导出
        * module.exports
        * exports
* this指向
    > 函数怎么调用
    * 是否通过new调用: new request.post()
        * this指向创建的实例
    * 是否通过`.`语法调用: request.post()
        * this指向`.`前面的对象
    * 直接调用: post()
        * this指向window
* wxs模块化

* wxml模板
    > 提取重复的wxml结构到单独的文件中,然后在需要的地方引入

## day8-3

### 复习
* 特殊组件
    * block
    * cover-view
    * wxs
    * template
    * import
    * include
* 模块化
    * js模块化
    * wxs模块化
    * wxml模板
* 自定义组件
    * App
    * Page
    * Component

    * 定义组件
    * 使用组件
        * usingComponents
    * 自定义tabbar
        1. app.json-> tabBar.custom=true
        2. 根目录创建custom-tab-bar
* 第三方组件
    * weui-miniprogram
    * vant-weapp
* 在小程序中使用npm模块
    * 构建
* 小程序跳转
    * navigator
    * 接口


### 知识点
* 常用接口
    * 本地存储
        * wx.setStorage()
        * web:localStorage/sessionStorage
    * 获取当前位置
        * wx.getLocation()
            * type
                * wgs84    国际标准，从GPS设备中取出的数据的坐标系 
                * gcj02    中国标准，从国行移动设备中定位获取的坐标数据使用这个坐标系
                * bd09     在gcj02基础上进行二次加密后的坐标系

## day8-5

### 知识点
* http与https的区别
    * ssl
    * 端口：80/443
* 申请免费ssl
    1. 购买域名
    2. 购买免费ssl证书
    3. ssl与域名绑定
    4. 服务器配置ssl证书
#### 云开发
* 数据库
* 存储空间
* 云函数
    > nodejs模块
    * 使用步骤
        1. 初始化
            > 指定env环境
        2. 操作
            * 前端操作：接口
            * 后端操作：云函数

    * 在云函数中（后端）操作数据库
    ```js
        // 云开发初始化
        const cloud = require('wx-server-sdk');

        cloud.init({
            env:'qf-52690b'
        })
        

        exports.main = async function(){
            // 获取数据库对象
            const db = cloud.database();

            // 获取对应集合
            const col = db.collection('class');

            // 获取班级列表（所有数据）
            col.get()

            // 获取对应条件的数据
            const res = await col.where({
                city:'广州'
            }).get()


            return {
                code:1,
                data:res,
                msg:'success'
            };
        }
    ```

    * 在小程序段（前端）操作数据库
    ```js

        wx.cloud.init({
            // cloud.DYNAMIC_CURRENT_ENV 云函数所在的环境
            env:wx.cloud.DYNAMIC_CURRENT_ENV
        });


        const db = wx.cloud.database();
        const col = db.collection('class');

        const res = await col.get();
        console.log('小程序端操作数据库',res);

    ```