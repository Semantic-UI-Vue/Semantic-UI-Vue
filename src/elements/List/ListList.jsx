import { getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiListList',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="list">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiList',
  },
};
