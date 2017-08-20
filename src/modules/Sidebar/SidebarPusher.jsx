export default {
  name: 'SuiSidebarPusher',
  props: {
    as: {
      type: [Object, String],
      default: 'div',
    },
  },
  render() {
    return <this.as class="pusher">{this.$slots.default}</this.as>;
  },
};
