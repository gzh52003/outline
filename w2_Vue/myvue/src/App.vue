<template>
  <div>
    <ul>
      <li :key="item.path" v-for="item in menu">
        {{item.text}}
      </li>
    </ul>
  </div>
</template>

<script>
// import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  data(){
    return {
      menu:[{
        text:'首页',
        path:'index.html'
      },{
        text:'用户管理',
        path:'user.html'
      },{
        text:'商品管理',
        path:'goods.html'
      },{
        text:'订单管理',
        path:'order.html'
      }]
    }
  },
  components: {
    // TodoList
  }
}
</script>

<style>

</style>
