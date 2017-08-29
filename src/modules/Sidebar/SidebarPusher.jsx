import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiSidebarPusher',
  props: {
    dimmed: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return <ElementType
      {...getChildProps(this)}
      class={classes('pusher', this.dimmed && 'dimmed')}
    >
      {this.$slots.default}
    </ElementType>;
  },
  meta: {
    parent: 'SuiSidebar',
  },
};
