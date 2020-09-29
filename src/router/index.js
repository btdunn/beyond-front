import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Departures from '../views/Departures.vue'
import Review from '../views/Review.vue'
import Menu from '../views/Menu.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  }, {
    path: '/depart',
    name: 'Departures',
    component: Departures
  }, {
    path: '/review',
    name: 'Review',
    component: Review
  }, {
    path: '/menu',
    name: 'Menu',
    component: Menu
  }, {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
