import Vue from 'vue';

// 1. 引入Vue-Router
import VueRouter from 'vue-router'


import Home from '../pages/Home.vue'
import User from '../pages/User.vue'
import Order from '../pages/Order.vue'
import Goods from '../pages/Goods.vue'
import Reg from '../pages/Reg.vue'
import Login from '../pages/Login.vue'
import NotFound from '../pages/NotFound.vue'


// 2. 使用VueRouter
Vue.use(VueRouter)

// 3. 实例化并配置参数
const router = new VueRouter({
    // mode:'history', // 一般上线后改为history路由(需要额外配置服务器)
    routes: [
        {
            path: '/', // /->/home
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/user',
            component: User
        },
        {
            path: '/order',
            component: Order
        },
        {
            path: '/goods',
            component: Goods
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/reg',
            component: Reg
        },
        {
            path: '/404',
            component: NotFound
        },

        // 404页面效果
        {
            path:'*',
            redirect:'/404'
        }
    ]
})

export default router;

console.log('router=',router);