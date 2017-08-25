import { getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiSidebarPushable',
  render() {
    const ElementType = getElementType(this);
    return <ElementType {...getChildProps(this)} class="pushable">{this.$slots.default}</ElementType>;
  },
  meta: {
    parent: 'SuiSidebar',
  },
};
