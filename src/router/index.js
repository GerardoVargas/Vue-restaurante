import Vue from 'vue'
import VueRouter from 'vue-router'
import {
   Home,
   About,
   Form,
   DishDetails
} from '../views/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: 'dishDetails/:id',
    name: 'DishDetails',
    component: DishDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
