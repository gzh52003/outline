// pages/class/class.js
const request = require('../../utils/request');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    console.log('onLoad');

    // 获取班级信息
    // $.ajax({url,method})
    // wx.request({
    //   url:'https://api.qfh5.cn/api/class',
    //   success:({data})=>{
    //     console.log(data);

    //     this.setData({
    //       classList:data.data.result
    //     })
    //   }
    // })

    const data = await request.get('/class');
    this.setData({
      classList:data.data.result
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')

    const tabbar = this.getTabBar();
    tabbar.setData({
      current:1
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('class.onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})