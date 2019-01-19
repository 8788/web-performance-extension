import Vue from 'vue'
import App from './index.vue'
import '../img/128.png'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
