import { getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiListHeader',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="header">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiList',
  },
};
