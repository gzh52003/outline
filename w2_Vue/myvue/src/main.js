import Vue from 'vue'; // webpack
import App from './App.vue' // webpack

new Vue({
  render: createElement => createElement(App),
}).$mount('#app')

// 导入**模块对象**中的default属性
// import * as obj from './module/list'
// import datalist from './module/list';
// import {setName,name as myname} from './module/list';

// console.log('list模块对象=',obj);
// console.log('datalist=',datalist);
// console.log('start.name=',myname);
// setTimeout(()=>{
//   setName("laoxie");
// },3000);

// setTimeout(()=>{
//   console.log('name=',myname)
// },5000)