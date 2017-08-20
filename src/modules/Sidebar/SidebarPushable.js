export default {
  name: 'sui-sidebar-pushable',
  props: {
    as: {
      type: Object,
      default: 'div',
    },
  },
  render(h) {
    return h(this.as, {
      class: 'pushable',
    }, this.$slots.default);
  },
};
