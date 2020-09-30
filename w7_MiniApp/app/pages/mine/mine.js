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
        avatarUrl:'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqOLRiarGt2Y9D0DerKUHduQibWzpPAQGPqiashw4yIPvRzeB4lkhOFs38bibyckqypicwvugibHrKXKElA/132',
        focus:["5ec3bf520b207d0c0cfd3f0a","5d7be4fbc994e53fe0f40f41","5d7becd7bcc11a2a20f9891c","5f1260d74de38719e4dbe8de","5e7c11e3ea52d10bd8c6c05a","5e7c11e3ea52d10bd8c6c065","5e7c11e3ea52d10bd8c6c07a","5e7c11e3ea52d10bd8c6c0c3","5da88dd670a7155e3c0cc878","5db9a87896f27505ac179b3c","5dbc3a30fafd1a26a4f0b841","5dbc3a30fafd1a26a4f0b842","5dbce49afafd1a26a4f0b91c","5dbce49afafd1a26a4f0b91e"]
      },
      qty:10,
      goodslist:[{
        id:1,
        name:'goods1',
        key:'price',
        list:[11,12,13]
      },{
        id:2,
        name:'goods2',
        key:'oldPrice',
        list:[21,22,23]
      },{
        id:3,
        name:'goods3',
        key:'marketPrice',
        list:[31,32,33]
      }],
      showUser:false,
      userList:[{
        username:'laoxie',
        role:'admin',
        avatar:'/assets/img/home.png'
      },{
        username:'jingjing',
        role:'vip',
        avatar:'/assets/img/home_active.png'
      }],
      devicePosition:'back',
      photo:''
  },

  changeUsername(e){
    console.log(e);
    const {userInfo} = this.data;
    userInfo.username = e.detail.value
    this.setData({userInfo})
  },

  changeUserStatus(){
    this.setData({
      showUser:!this.data.showUser
    })
  },
  changeCamera(){
    const {devicePosition} = this.data;
    this.setData({
      devicePosition: devicePosition==='back' ? 'front' :'back'
    })
  },
  takePhoto(){
    this.camera.takePhoto({
      success:({tempImagePath})=>{
        console.log('tempImagePath=',tempImagePath)
        this.setData({
          photo:tempImagePath
        })

        // 存入相册
        wx.saveImageToPhotosAlbum({
          filePath:tempImagePath,
          success(){
            wx.showToast({
              icon:'none',
              title:'存入相册成功'
            })
          }
        })
      }
    })
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
    this.camera = wx.createCameraContext();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const tabbar = this.getTabBar();
    tabbar.setData({
      current:2
    })
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
  onShareAppMessage: function (res) {
    console.log('share',res)
    // 此事件处理函数需要 return 一个 Object，用于自定义转发内容，返回内容如下
    return {
      title:'震惊!xxx同学这样健身',
      path:'/pages/mine/mine',
      imageUrl:'/assets/img/jingjing.png'
    }
  }
})