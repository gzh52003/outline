// custom-tab-bar/index.js

// custom-tab-bar/index.js
import weui from 'weui-miniprogram';
console.log('weui',weui)

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    "menu":[{
      "pagePath":"pages/index/index",
      "text":"首页",
      "iconPath":"/assets/img/home.png",
      "selectedIconPath":"/assets/img/home_active.png"
    },{
      "pagePath":"pages/class/class",
      "text":"班级",
      "iconPath":"/assets/img/class.png",
      "selectedIconPath":"/assets/img/class_active.png"
    },{
      "pagePath":"pages/mine/mine",
      "text":"我的",
      "iconPath":"/assets/img/mine.png",
      "selectedIconPath":"/assets/img/mine_active.png"
    }],
    current:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabChange(e){
      const {index,item} = e.detail;

      wx.switchTab({
        url:'/'+item.pagePath
      })

      this.setData({
        current:index
      })
    }
  },
  pageLifetimes:{
    onReay(){
      // 获取当前页面对应的索引值
      // const index = getCurrentPages()
      // this.setData({
      //   current:index
      // })
    }
  }
})
