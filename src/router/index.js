import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login/login.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: login
  }]
})
