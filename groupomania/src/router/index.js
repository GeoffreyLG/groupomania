import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Signin from '@/views/signin'

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
  ],
  mode: 'history'
})