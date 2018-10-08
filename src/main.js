import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import AppStory from './components/AppStory.vue'
import Error from './components/Error.vue'

Vue.component('app-story', AppStory)
Vue.component('error', Error)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
