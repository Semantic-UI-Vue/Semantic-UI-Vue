/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Component from './Component/Component';
import Docs from './Docs';
import DocsPage from './DocsPage';
import Features from './Features';
import Layouts from './Layouts';
import Maximize from './Maximize';
import Theming from './Layouts/Theming';
import Login from './Layouts/Login';
import FixedMenu from './Layouts/FixedMenu';
import QuickStart from '../README.md';
import Contributing from '../CONTRIBUTING.md';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/layouts/theming',
      component: Theming,
    },
    {
      path: '/layouts/login',
      component: Login,
    },
    {
      path: '/layouts/fixed_menu',
      component: FixedMenu,
    },
    {
      path: '/maximize/:type/:componentName/:fileName',
      component: Maximize,
      props: true,
    },
    {
      path: '/',
      component: Docs,
      children: [
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
          path: '/layouts',
          component: Layouts,
        },
        {
          path: '/features',
          component: Features,
        },
        {
          path: '/:type/:componentName',
          component: Component,
          props: true,
        },
        {
          path: '/:type/:componentName/:tab',
          component: Component,
          props: true,
        },
      ],
    },
  ],
  linkExactActiveClass: 'active',
});

router.afterEach(to => {
  if (typeof ga === 'function') {
    ga('set', 'page', to.path);
    ga('send', 'pageview');
  }

  if (to.hash) {
    const el = document.getElementById(to.hash.substr(1));
    if (el) el.scrollIntoView();
  }
});

export default router;
