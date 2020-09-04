import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
  {
    path:'/',
    redirect:{name:'Home'}
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component:()=>import('../views/List.vue')
  },
  {
    path: '/goods/:id',
    name: 'Goods',
    component:()=>import('../views/Goods.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component:()=>import('../views/Cart.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component:()=>import('../views/Login.vue')
  },
  {
    path: '/reg',
    name: 'Reg',
    // component:About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // 路由按需引入(路由懒加载)
    // component:function(){
    //   return import('../views/About.vue')
    // }
    component:()=>import('../views/Reg.vue')
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  // mode:'history',
  routes
})

export default router
