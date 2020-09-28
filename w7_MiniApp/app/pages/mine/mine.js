// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo:{
        username:'laoxie',
        role:'admin',
        gender:'男',
        avatarUrl:'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqOLRiarGt2Y9D0DerKUHduQibWzpPAQGPqiashw4yIPvRzeB4lkhOFs38bibyckqypicwvugibHrKXKElA/132'
      },
      qty:10
  },

  changeUsername(e){
    console.log(e);
    const {userInfo} = this.data;
    userInfo.username = e.detail.value
    this.setData({userInfo})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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