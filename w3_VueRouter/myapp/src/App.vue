<template>
  <el-container style="height:100%">
    <el-header class="header">
      <el-row>
        <el-col :span="12" class="logo">
          <i class="el-icon-connection"></i>金锋后台管理系统
        </el-col>
        <el-col :span="12" style="text-align:right">
          <span>{{userInfo.username}} </span>
          <el-button type="text" @click="logout" v-if="userInfo.authorization">退出</el-button>
          <!-- <el-button type="text" @click="goto('/reg')">注册</el-button> -->
          <el-button type="text" @click="goto('/login')" v-else>登录</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userInfo:{},
      activeIndex: "/home",
      openMenu: [],
      menu: [
        {
          text: "首页",
          path: "/home",
          icon: "el-icon-s-home",
        },
        {
          text: "用户管理",
          path: "/user",
          icon: "el-icon-user-solid",
          submenu: [
            {
              text: "添加用户",
              path: "/add",
            },
            {
              text: "用户列表",
              path: "/list",
            },
          ],
        },
        {
          text: "商品管理",
          path: "/goods",
          icon: "el-icon-grape",
        },
        {
          text: "订单管理",
          path: "/order",
          icon: "el-icon-s-order",
        },
      ],
      currentIndex: 0,
    };
  },
  watch:{
    $route(to,from){
      if(from.path === '/login'){
        this.getUserInfo();

      }

      if(to.path === '/login'){
        this.logout();
      }
    }
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    back() {
      this.$router.back();
    },
    changeMenu(path) {
      this.activeIndex = path;
    },
    logout(){
      localStorage.removeItem('userInfo');
      this.userInfo = {}
      this.$router.push('/login')
    },
    getUserInfo(){
      const userInfo = localStorage.getItem('userInfo') || {};
      try{
        this.userInfo = JSON.parse(userInfo);
      }catch(err){
        this.userInfo = {}
      }
    }
  },
  components: {},
  created(){
    console.log(this)
    this.getUserInfo();
  }
};
</script>

<style lang="scss">
html {
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
}
.header {
  line-height: 60px;
  color: #fff;
  background-color: rgba(84, 92, 100, 0.9);
  .logo {
    font-size: 24px;
    color: #fc0;
    i {
      font-size: 40px;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
}
.is-active {
  i {
    color: inherit !important;
  }
}
</style>
