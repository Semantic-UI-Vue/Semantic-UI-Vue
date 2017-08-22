/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Component from './Component';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/:type/:componentName',
      component: Component,
      props: true,
    },
  ],
});
