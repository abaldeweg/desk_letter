export default [
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
]
