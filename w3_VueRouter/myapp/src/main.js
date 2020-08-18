import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  // 把router注入Vue实例
  router,
  render: h => h(App),
}).$mount('#app')
