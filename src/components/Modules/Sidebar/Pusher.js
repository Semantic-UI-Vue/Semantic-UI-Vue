import Vue from 'vue';

export default Vue.component('SidebarPusher', {
  props: {
    as: Object,
  },
  render(createElement) {
    return createElement(this.as || 'div', {
      class: 'pusher',
    }, this.$slots.default);
  },
});
