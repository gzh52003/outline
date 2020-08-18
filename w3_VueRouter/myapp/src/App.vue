<template>
  <div>
    <button @click="back">Back</button>
    <nav>
      <ul>
        <li :key="item.path" v-for="(item,idx) in menu" @click="goto(item.path,idx)" :class="currentIndex===idx ? 'current' : ''">
          <!-- <router-link 
          :to="item.path" 
          tag="span"
          exact-active-class="current"
          
          >{{item.text}}</router-link>-->
          {{item.text}}
          </li> 
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      menu:[{
        text:'首页',
        path:'/home'
      },{
        text:'用户管理',
        path:'/user'
      },{
        text:'商品管理',
        path:'/goods'
      },{
        text:'订单管理',
        path:'/order'
      }],
      currentIndex:0
    }
  },
  methods:{
    goto(path,idx){
      console.log(this.$router);
      this.$router.push(path);
      // this.$router.replace(path);
      this.currentIndex = idx
    },
    back(){
      this.$router.back();
    }
  },
  components: {
    
  }
}
</script>

<style lang="scss">
  .current{color:#58bc58;font-weight:bold;}
</style>
