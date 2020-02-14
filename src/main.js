import Vue from 'vue'
import App from './App.vue'
import Colored from './directives/colored'
import VueRouter from 'vue-router'
import router from './router'
import store from './storage/index.js'

Vue.config.productionTip = false

Vue.use(VueRouter)


// Filters
Vue.filter('uppercase', str => str.toUpperCase())

// Directives
Vue.directive('colored', Colored)

export const eventBus = new Vue()

new Vue({
  render: h => h(App),
  router, store
}).$mount('#app')
