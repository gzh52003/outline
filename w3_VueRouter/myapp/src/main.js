import Vue from 'vue'
import ElementUI,{Button,Table} from 'element-ui'
import App from './App.vue'
import router from './router'
import request from './utils/request';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);// install(){for(let key in ElementUI){Vue.use(ElememntUI[key])}}
// Vue.component(Button.name,Button);// <el-button/>
// Vue.component(Table.name,Table);// <el-button/>
// Vue.use(Button)
// Vue.use(Table)
console.log('ElementUI=',ElementUI);

// 通过原型链共享ajax请求的方法
Vue.prototype.$request = request

new Vue({
  // 把router注入Vue实例
  router,
  render: h => h(App),
}).$mount('#app')
