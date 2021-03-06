import Vue from 'vue';

// 1. 引入Vue-Router
import VueRouter from 'vue-router'


import Index from '../pages/Index.vue'
import Home from '../pages/Home.vue'

import User from '../pages/user/Default.vue'
import UserList from '../pages/user/List.vue'
import UserAdd from '../pages/user/Add.vue'
import UserEdit from '../pages/user/Edit.vue'

import Goods from '../pages/goods/Default.vue'
import GoodsList from '../pages/goods/List.vue'
import GoodsAdd from '../pages/goods/Add.vue'
import GoodsEdit from '../pages/goods/Edit.vue'

import Order from '../pages/Order.vue'
import Reg from '../pages/Reg.vue'
import Login from '../pages/Login.vue'
import NotFound from '../pages/NotFound.vue'

import request from '../utils/request';


// 2. 使用VueRouter
Vue.use(VueRouter)

// 3. 实例化并配置参数
const router = new VueRouter({
    // mode:'history', // 一般上线后改为history路由(需要额外配置服务器)
    routes: [
        {
            path:'/',
            meta:{
                requiresAuth:true
            },
            component:Index,
            children:[
                {
                    path: '/', // /->/home
                    redirect: '/home'
                },
                {
                    path: '/home',
                    component: Home,
                },
                {
                    path: '/user',
                    component: User,
                    children: [
                        // 进入用户管理页面直接跳到用户列表
                        {
                            path: '',
                            redirect: 'list'
                        }, {
                            path: 'add',
                            component: UserEdit
                        }, {
                            path: 'list',
                            name:'UserList',
                            component: UserList
                        }, {
                            name:'userEdit',
                            path: 'edit/:id',
                            component: UserEdit
                        }]
                },
                {
                    path: '/order',
                    component: Order,
                },
                {
                    path: '/goods',
                    component: Goods,
                    children: [
                        // 进入用户管理页面直接跳到用户列表
                        {
                            path: '',
                            redirect: 'list'
                        }, {
                            path: 'add',
                            component: GoodsEdit
                        }, {
                            path: 'list',
                            name:'UserList',
                            component: GoodsList
                        }, {
                            path: 'edit/:id',
                            component: GoodsEdit
                        }]
        
                    // 路由独享的守卫
                    // beforeEnter(to,from,next){
                    //     console.log('beforeEnter')
                    // }
                },
            ]
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
            path: '*',
            redirect: '/404'
        }
    ]
});



// 全局路由守卫
// beforeEach：在路由切换前执行
router.beforeEach(function(to,from,next){
    // 判断目标路由是否需要登录才可访问
    console.log('beforeEach',to,from);
    // if(to.meta.requiresAuth){
    if(to.matched.some(item=>item.meta.requiresAuth)){
        let userInfo = localStorage.getItem('userInfo') || {};
        try{
            userInfo = JSON.parse(userInfo)
        }catch(err){
            userInfo = {};
        }
        console.log('userInfo',userInfo)

        // 判断当前用户信息是否包含token
        if(userInfo.authorization){
            console.log('token=',userInfo.authorization);
            // 发起请求校验token的有效性
            request.get('/jwtverify',{
                params:{
                    authorization:userInfo.authorization
                }
            }).then(({data})=>{
                if(data.code === 0){
                    next({
                        path:'/login',
                        query:{
                            // 跳转到登录页面，并传递目标页面路径
                            redirectTo:to.fullPath
                        }
                    });
                }
            })
            next();
        }else{
            // router.push('/login');
            // router.push({
            //     path:'/login'
            // });
            next({
                path:'/login',
                query:{
                    // 跳转到登录页面，并传递目标页面路径
                    redirectTo:to.fullPath
                }
            })
        }
    }else{
        next();
    }

    
});

// afterEach： 路由切换完成后执行
router.afterEach((to,from)=>{
    console.log('afterEach',to,from);
})


export default router;

console.log('router=', router);