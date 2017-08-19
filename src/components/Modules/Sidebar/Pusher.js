import Vue from 'vue';

export default Vue.component('SidebarPusher', {
  props: {
    as: Object,
    class: String,
  },
  render(createElement) {
    return createElement(this.as || 'div', {
      class: `${this.class || ''} pusher`,
    }, this.$slots.default);
  },
});
