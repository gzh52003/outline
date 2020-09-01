<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active" route>
      <van-tabbar-item :icon="item.icon" v-for="item in menu" :key="item.name" :to="item.path">{{item.text}}</van-tabbar-item>
  </van-tabbar>
  </div>
</template>
<script>
import Vue from 'vue'
import {Button,Tabbar, TabbarItem} from 'vant';
Vue.use(Button)
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data(){
    return {
      menu:[{
        name:'home',
        path:'/home',
        icon:'wap-home-o',
        text:'首页'
      },
      {
        name:'discover',
        path:'/discover',
        icon:'eye-o',
        text:'发现'
      },{
        name:'cart',
        path:'/cart',
        icon:'shopping-cart-o',
        text:'购物车'
      },{
        name:'mine',
        path:'/mine',
        icon:'user-o',
        text:'我的'
      }]
    }
  }
}
</script>
<style>

</style>

