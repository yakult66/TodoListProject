import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: { name: 'mainPage' }
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
    meta: { hideNavBar: true },
    redirect: { name: 'loginUser' },
    children: [
      {
        path: 'login',
        name: 'loginUser',
        component: () => import('../component/loginUser.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../component/regisUser.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
