import Vue from 'vue';
import SemanticUI from 'semantic-ui-vue';
import PortalVue from 'portal-vue';
import Example from './Example.vue';
import 'semantic-ui-css/semantic.min.css';

Vue.config.productionTip = false;
Vue.use(PortalVue);
Vue.use(SemanticUI);

new Vue({
  render: h => h(Example),
}).$mount('#app');
