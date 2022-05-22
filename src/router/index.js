import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.VUE_APP_BASE_URL),
  linkActiveClass: 'isActive',
  linkExactActiveClass: 'isActiveExact',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: { name: 'letter' },
    },
    {
      path: '/letter',
      name: 'letter',
      component: () => import('../views/LetterView.vue'),
      props: true,
    },
    {
      path: '/letter/:id',
      name: 'letter.edit',
      component: () => import('../views/LetterEditView.vue'),
      props: true,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)',
      redirect: { name: 'letter' },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
