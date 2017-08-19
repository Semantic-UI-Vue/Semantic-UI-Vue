import Vue from 'vue';

export default Vue.component('SidebarPushable', {
  props: {
    as: Object,
  },
  render(createElement) {
    return createElement(this.as || 'div', {
      class: 'pushable',
    }, this.$slots.default);
  },
});
