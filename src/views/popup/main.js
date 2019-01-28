import Vue from 'vue'
import App from './index.vue'
import '../../assets/128.png'
import VCharts from 'v-charts'
import ViserVue from 'viser-vue'

Vue.config.productionTip = false

Vue.use(VCharts)
Vue.use(ViserVue)

new Vue({
  render: h => h(App)
}).$mount('#app')
