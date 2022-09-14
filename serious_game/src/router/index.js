import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/plateau',
      name: 'plateau',
      component: () => import('../views/PlateauView.vue')
    }
  ]
})

export default router
