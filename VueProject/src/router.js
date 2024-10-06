import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import AboutUs from './pages/AboutUs.vue'
import Groups from './pages/Groups.vue'
import Profile from './pages/Profile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutUs },
  { path: '/groups', component: Groups },
  { path: '/profile', component: Profile },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router