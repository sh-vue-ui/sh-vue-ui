import Vue from 'vue'
import App from './App.vue'
import ShUI from './../packages'

Vue.use(ShUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
