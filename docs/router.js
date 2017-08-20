/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Example from './Example';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/:type/:component',
      component: Example,
    },
  ],
});
