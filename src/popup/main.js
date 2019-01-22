import Vue from 'vue'
import App from './index.vue'
import '../assets/128.png'
import VCharts from 'v-charts'

Vue.config.productionTip = false

Vue.use(VCharts)

new Vue({
  render: h => h(App)
}).$mount('#app')
