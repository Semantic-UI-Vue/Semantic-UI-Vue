export default {
  name: 'sui-sidebar-pushable',
  props: {
    as: {
      type: [Object, String],
      default: 'div',
    },
  },
  render() {
    const as = this.as;
    return <as class="pushable"><slot /></as>;
  },
};
