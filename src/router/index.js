import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/aa',
    name: 'vnc',
    component: (resolve) => require(['@/components/vnc/vnc'], resolve),
    meta: { title: 'VNC' },
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/',
    name: 'novnc',
    component: (resolve) => require(['@/components/vnc/novnc'], resolve),
    meta: { title: 'VNCScr' },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
