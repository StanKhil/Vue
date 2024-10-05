import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import AboutUs from './pages/AboutUs.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutUs },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router