import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router'
// 导入ui并use
import ElementUI from'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import 'assets/css/index.css'


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
