import { getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiListContent',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="content">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiList',
  },
};
