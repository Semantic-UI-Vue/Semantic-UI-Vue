export default {
  name: 'sui-sidebar-pusher',
  props: {
    as: {
      type: [Object, String],
      default: 'div',
    },
  },
  render() {
    return <this.as class="pusher"><slot /></this.as>;
  },
};
