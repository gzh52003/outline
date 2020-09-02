import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './utils/request'

// 全部引入
// import Vant from 'vant'
// import 'vant/lib/index.css';
// Vue.use(Vant);

// 按需引入
// import Button from 'vant/lib/button';
// import 'vant/lib/button/style';
// console.log('Button',Button)
// Vue.use(Button);

// 利用工具实现按需引入
// babel-plugin-import

Vue.config.productionTip = false
Vue.prototype.$request = request;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
