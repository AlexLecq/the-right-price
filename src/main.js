import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

Vue.config.productionTip = false
Vue.prototype.$modes = {
  hit: 0,
  timer: 1,
  both: 2
}
new Vue({
  render: h => h(App),
}).$mount('#app')
