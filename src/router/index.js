import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/users.vue'

const routes = [
  {
    path: '/',
    name: 'users',
    component: Users
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/projects.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
