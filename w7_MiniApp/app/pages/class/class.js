// pages/class/class.js
const request = require('../../utils/request');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classList:[],
    page:1,
    size:10,
    hasMore:true
  },

  async getData(){
    const {classList,page,size} = this.data;
    // wx.showLoading({
    //   title:'加载中...'
    // })
    const data = await request.get('/class',{
      page,
      size
    });
    this.setData({
      classList:[...classList,...data.data.result],
      total:data.data.total
    });
    // wx.hideLoading()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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

    this.getData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')

   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('class.onShow')
    const tabbar = this.getTabBar();
    tabbar.setData({
      current:1
    })
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
    console.log('刷新')
    this.setData({
      page:1,
      size:10,
      hasMore:true,
      classList:[]
    });
    this.getData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('触底')
    const {page,classList,total} = this.data;
    if(classList.length<total){
      this.setData({
        page:page+1
      });
  
      this.getData();

    }else{
      this.setData({
        hasMore:false
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})