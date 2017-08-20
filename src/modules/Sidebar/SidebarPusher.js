export default {
  name: 'sui-sidebar-pusher',
  props: {
    as: {
      type: Object,
      default: 'div',
    },
  },
  render(h) {
    return h(this.as, {
      class: 'pusher',
    }, this.$slots.default);
  },
};
