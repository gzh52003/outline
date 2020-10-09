// pages/class/class.js
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
        type:'find',
        query:{
          //city:'广州'
        },
        options:{
          size:100

        }
      },
      success:(res)=>{
        console.log('云函数返回值=', res);

        this.setData({
          classList:res.result.result
        })
      }
    })

    // const db = wx.cloud.database();
    // const col = db.collection('class');

    // const res = await col.get();
    // console.log('小程序端操作数据库',res);


    // 根据云id获取真实地址
    wx.cloud.getTempFileURL({
      fileList:['cloud://qf-52690b.7166-qf-52690b-1257864894/user/jj.png']}).then(res=>{
      console.log('图片真实地址：',res)
    })
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

  },
  uploadImage(){
    wx.chooseImage({
      success(res){
        console.log(res);

        wx.cloud.uploadFile({
          cloudPath: 'user/jj.png',
          filePath: res.tempFilePaths[0], // 文件路径
          success(){
            wx.showToast({
              title:'图片上传成功'
            })
          },
          fail(err){
            console.error(err)
          }
        });
      }
    })
  }
})