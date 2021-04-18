import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LightBox from '../views/electronics/LightBox.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/electronics/lightbox',
    name: 'LightBox',
    component: LightBox
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
