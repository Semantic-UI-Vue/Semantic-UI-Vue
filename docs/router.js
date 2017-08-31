/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Component from './Component';
import DocsPage from './DocsPage';
import Theming from './Layouts/Theming';
import QuickStart from '../README.md';
import Contributing from '../CONTRIBUTING.md';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: DocsPage,
      props: { markdown: QuickStart },
    },
    {
      path: '/contributing',
      component: DocsPage,
      props: { markdown: Contributing },
    },
    {
      path: '/layout/theming',
      component: Theming,
    },
    {
      path: '/:type/:componentName',
      component: Component,
      props: true,
    },
  ],
  linkExactActiveClass: 'active',
});

router.afterEach((to) => {
  if (to.hash) {
    const el = document.getElementById(to.hash.substr(1));
    if (el) el.scrollIntoView();
  }
});

export default router;
