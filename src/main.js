import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTyperPlugin from 'vue-typer'
import VueScrollTo from 'vue-scrollto'
import VuePageTransition from 'vue-page-transition'



Vue.use(VuePageTransition)
Vue.use(VueScrollTo,{
  container:"body",
  duration: 500,
  easing: "ease",
  offset: -80,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
Vue.use(VueTyperPlugin)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
