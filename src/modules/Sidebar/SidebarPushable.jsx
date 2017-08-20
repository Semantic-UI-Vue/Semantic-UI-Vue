export default {
  name: 'SuiSidebarPushable',
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
