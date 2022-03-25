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
    path: '/casas',
    name: 'Casas',
    component: () => import(/* webpackChunkName: "Casas" */ '../views/Casas.vue')
  },
  {
    path: '/apartamentos',
    name: 'Apartamentos',
    component: () => import(/* webpackChunkName: "Casas" */ '../views/Apartamentos.vue')
  },
  {
    path: '/kit-net',
    name: 'kit-net',
    component: () => import(/* webpackChunkName: "Casas" */ '../views/KitNet.vue')
  },
  {
    path: '/temporada',
    name: 'temporada',
    component: () => import(/* webpackChunkName: "Casas" */ '../views/Temporada.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
