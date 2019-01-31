import Vue from 'vue'
import App from './index.vue'
import '../../assets/128.png'
import ViserVue from 'viser-vue'

Vue.config.productionTip = false

Vue.use(ViserVue)

new Vue({
  render: h => h(App)
}).$mount('#app')
