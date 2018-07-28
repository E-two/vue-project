import Vue from 'vue';
import Router from 'vue-router';
import store from '/store';

const TestVideo = () => import('/pages/testVideo/testVideo.vue');

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'TestVideo',
      component: TestVideo
    }
  ],
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.getters.getToken) {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // The path of the route to be redirected is used as a parameter. After the login succeeds, the route is redirected to the route.
      });
    }
  } else {
    next();
  }
});

export default router;
