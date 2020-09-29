// components/datalist/datalist.js

const user = require('../behaviors/user');
// console.log('userbehaviors=',user)

Component({
  behaviors:[user],
  /**
   * 组件的属性列表
   */
  properties: {
    data:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    test:100
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getData(){

    }
  },

  // 生命周期函数
  // 旧版本写法：不推荐
  // created(){
  //   console.log('created=',this.data.data);
  // },
  // attached(){
  //   console.log('attached=',this.data.data);
  // },

  // 推荐写法：写入lifetimes中
  lifetimes:{
    created(){
      console.log('created=',this.data.data);
    },
    attached(){
      console.log('attached=',this.data.data);
      console.log('attached.data=',this.data);
    },
    ready(){
      console.log('ready=',this.data.data);
      console.log('ready=',this);
    },
    moved(){
      console.log('moved=',this.data.data);
    },
    detached(){
      console.log('detached=',this.data.data);
    }
  },

  // 组件所在页面生命周函数
  pageLifetimes:{

  }
})
