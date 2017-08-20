export default {
  name: 'SuiSidebarPushable',
  props: {
    as: {
      type: [Object, String],
      default: 'div',
    },
  },
  render() {
    return <this.as class="pushable">{this.$slots.default}</this.as>;
  },
};
