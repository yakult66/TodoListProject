import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: { name: 'loginPage' }
  },
  {
    path: '/mainPage',
    name: 'mainPage',
    component: () => import('../view/mainPage.vue')
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
        component: () => import('../component/login/loginUser.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../component/login/regisUser.vue')
      }
    ]
  },
  {
    path: '/historyPage',
    name: 'historyPage',
    component: () => import('../view/historyPage.vue'),
  },
  {
    path: '/accountPage',
    name: 'accountPage',
    component: () => import('../view/accountPage.vue'),
    redirect: { name: 'accManager' },
    children: [
      {
        path: 'accManager',
        name: 'accManager',
        component: () => import('../component/account/accManager.vue'),
      },
      {
        path: 'queryUser',
        name: 'queryUser',
        component: () => import('../component/account/accQuery.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})


router.beforeEach((to,_from) => {
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  const publicPages = ['loginPage', 'loginUser', 'register'];
  const authRequired = !publicPages.includes(to.name as string);

  if (authRequired && !user) {
    return { name: 'loginUser' };
  }

  if (to.name === 'accManager') {
    if (!user || user.role !== 'admin') {
      alert('僅限管理員可查看');
      return { name: 'mainPage' };
    }
  }

  return true;
});

export default router
