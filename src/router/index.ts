import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: '/mainPage'
  },
  {
    path: '/mainPage',
    name: 'mainPage',
    component: () => import('../view/mainPage.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
