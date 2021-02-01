import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Signin from '@/views/signin'
import Subscribe from '@/views/subscribe'
Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/subscribe',
      name: 'subscribe',
      component: Subscribe
    },
  ],
  mode: 'history'
})