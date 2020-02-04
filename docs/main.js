// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import SemanticUI from 'semantic-ui-vue';
import PortalVue from 'portal-vue';
import App from './App';
import router from './router';
import markdownSupport from './markdownSupport';
import docs from './components';

Vue.config.productionTip = false;
Vue.use(markdownSupport);
Vue.use(PortalVue);
Vue.use(SemanticUI);
Vue.use(docs);

const root = new Vue({
  components: { App },
  router,
  template: '<App/>',
});

document.addEventListener('DOMContentLoaded', () => {
  root.$mount('#app');
  document.dispatchEvent(new Event('vue-post-render'));
});
