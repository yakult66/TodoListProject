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
        component: () => import('../component/loginUser.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../component/regisUser.vue')
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
        component: () => import('../component/accManager.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})


router.beforeEach((to, from, next) => {
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  const publicPages = ['loginPage', 'loginUser', 'register'];
  const authRequired = !publicPages.includes(to.name as string);

  if (authRequired && !user) {
    return next({ name: 'loginUser' });
  }

  if (to.name === 'accManager') {
    if (!user || user.role !== 'admin') {
      alert('僅限管理員可查看');
      return next({ name: 'mainPage' });
    }
  }

  next();
});

export default router
