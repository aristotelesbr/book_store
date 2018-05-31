import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './app.vue'
import router from './router'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Use global vuetify
Vue.use(Vuetify)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })
})
