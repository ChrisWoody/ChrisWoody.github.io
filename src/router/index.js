import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import('../views/electronics/LightBox.vue')
  },
  {
    path: '/props/w40kpauldron',
    name: 'W40kPauldron',
    component: () => import('../views/props/W40kPauldron.vue')
  },
  {
    path: '/props/w40kbracer',
    name: 'W40kBracer',
    component: () => import('../views/props/W40kBracer.vue')
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
