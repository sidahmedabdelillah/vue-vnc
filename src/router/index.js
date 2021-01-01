import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../views/login.vue';
import Home from '../views/Home.vue';

import store from '../store/index.js';

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Home' },
    beforeEnter: (to, from, next) => {
      const expired = store.state.expired;
      const left = store.state.left;
      console.log({ expired, left });
      if (expired) {
        next('/expired');
      }

      if (!store.state.isLogged) {
        next('/login');
      }
      next();
    },
  },
  {
    path: '/expired',
    name: 'expired',
    component: (resolve) => require(['../views/expire.vue'], resolve),
  },
  {
    path: '/novnc',
    name: 'novnc',
    component: (resolve) => require(['@/components/vnc/novnc'], resolve),
    meta: { title: 'VNCScr' },
  },
];

const router = new VueRouter({
  routes,
});

router.afterEach(async () => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg');
  await sleep(2000);

  appLoading.style.display = 'none';
});

export default router;
