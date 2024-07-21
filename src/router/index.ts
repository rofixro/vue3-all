import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quick-start',
      component: () => import('../views/quick-start.vue')
    },
    {
      path: '/template-syntax',
      name: 'template-syntax',
      component: () => import('../views/template-syntax.vue')
    },
    {
      path: '/reactivity-fundamentals',
      name: 'reactivity-fundamentals',
      component: () => import('../views/reactivity-fundamentals.vue')
    }
  ]
})

export default router
