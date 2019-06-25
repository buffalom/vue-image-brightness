import Vue from 'vue'
import App from './App.vue'
import VueImageBrightness from './plugins/vue-image-brightness'

Vue.use(VueImageBrightness)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
