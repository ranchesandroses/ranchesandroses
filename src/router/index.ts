import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/RSVP.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/rsvp',
    name: 'RSVP',
    component: () => import('../views/RSVP.vue')
  },
  {
    path: '/details',
    name: 'Finish RSVP',
    component: () => import('../views/FinishRSVP.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
