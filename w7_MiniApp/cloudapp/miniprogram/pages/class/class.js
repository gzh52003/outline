// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: async function () {
    console.log('cloudTest')
    // wx.cloud.callFunction({
    //   name:'getclass',// 云函数的名字
    //   success(res){
    //     console.log('云函数返回值=', res);
    //   }
    // })


    wx.cloud.callFunction({
      name:'class',// 云函数的名字
      data:{
        type:'find'
      },
      success(res){
        console.log('云函数返回值=', res);
      }
    })

    const db = wx.cloud.database();
    const col = db.collection('class');

    const res = await col.get();
    console.log('小程序端操作数据库',res);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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