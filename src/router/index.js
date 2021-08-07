import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/Home.vue'
import About from '../view/About.vue'
import Login from '../view/Login.vue'
import Register from '../view/Register.vue'
import Landing from '../view/Landing.vue'
import Admin from '../view/Admin.vue'
import Reward from '../view/Reward.vue'
import History from '../view/History.vue'
import Leaderboard from '../view/Leaderboard.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/reward',
    name: 'Reward',
    component: Reward
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: Leaderboard
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router