import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: { name: 'letter' },
    },
    {
      path: '/letter',
      name: 'letter',
      component: () => import('../views/LetterView'),
      props: (route) => ({
        is404: route.params.is404,
      }),
    },
    {
      path: '/letter/:id',
      name: 'letter.edit',
      component: () => import('../views/LetterEditView'),
      props: true,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView'),
    },
    {
      path: '*',
      redirect: { name: 'letter', params: { is404: true } },
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
