import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import Signin from '../views/signin.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/',
      name: 'Index',
      component: App
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
  ]
})