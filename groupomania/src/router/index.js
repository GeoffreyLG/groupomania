import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import Signin from '../views/signin.vue'

Vue.use(VueRouter)

const routes = [
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

const router = new VueRouter({
  routes
})

export default router
