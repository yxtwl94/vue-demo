import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import axios from 'axios'

Vue.use(ElementUI)
Vue.prototype.$ajax = axios
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    {
      path: '/',
      component: App
    },
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
