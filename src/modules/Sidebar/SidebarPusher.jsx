import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiSidebarPusher',
  mixins: [listenersMixin],
  props: {
    dimmed: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return <ElementType
      {...getChildProps(this)}
      {...this.generateListeners()}
      class={classes('pusher', this.dimmed && 'dimmed')}
    >
      {this.$slots.default}
    </ElementType>;
  },
  meta: {
    parent: 'SuiSidebar',
  },
};
