import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/scss/bootstrap.scss'
import './assets/scss/main.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
