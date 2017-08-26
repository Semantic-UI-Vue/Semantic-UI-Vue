// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import SemanticUI from 'src';
import App from './App';
import router from './router';
import docs from './components';

Vue.config.productionTip = false;
Vue.use(SemanticUI);
Vue.use(docs);

/* eslint-disable no-new */
new Vue({
  components: { App },
  el: '#app',
  router,
  template: '<App/>',
});
