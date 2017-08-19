import Vue from 'vue';

export default Vue.component('SidebarPushable', {
  props: {
    as: Object,
    class: String,
  },
  render(createElement) {
    return createElement(this.as || 'div', {
      class: `${this.class || ''} pushable`,
    }, this.$slots.default);
  },
});
