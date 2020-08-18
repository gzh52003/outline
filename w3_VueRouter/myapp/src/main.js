import Vue from 'vue'
import App from './App.vue'

import router from './router'

new Vue({
  // 把router注入Vue实例
  router,
  render: h => h(App),
}).$mount('#app')
