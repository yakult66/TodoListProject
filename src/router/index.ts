import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: { name: 'loginPage' }
  },
  {
    path: '/mainPage',
    name: 'mainPage',
    component: () => import('../view/mainPage.vue'),
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    component: () => import('../view/loginPage.vue'),
    meta: { hideNavBar: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
