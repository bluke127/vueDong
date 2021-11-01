import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history', //history를 써야 자연스러운 url 기능을 사용할 수 있다. 아니면 #기호로 url 사용!
  routes: [
    // {
    //   path: '/',
    //   component: () => import('@/page/Login.vue'),
    // children: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/page/Login.vue'),
    },
    {
      path: '/join',
      name: 'Join',
      component: () => import('@/page/Join.vue'),
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('@/page/Main.vue'),
    },
    {
      path: '*',
      component: () => import('@/page/Login.vue'),
    },
    // ],
    // },
  ],
});
