/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Component from './Component';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/:type/:componentName',
      component: Component,
      props: true,
    },
  ],
});

router.afterEach((to) => {
  if (to.hash) {
    const el = document.getElementById(to.hash.substr(1));
    if (el) el.scrollIntoView();
  }
});

export default router;
