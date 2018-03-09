import { getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiSidebarPushable',
  mixins: [listenersMixin],
  render() {
    const ElementType = getElementType(this);
    return <ElementType {...getChildProps(this)} {...this.generateListeners()} class="pushable">{this.$slots.default}</ElementType>;
  },
  meta: {
    parent: 'SuiSidebar',
  },
};
