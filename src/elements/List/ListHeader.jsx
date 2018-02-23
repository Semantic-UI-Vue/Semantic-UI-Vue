import { getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiListHeader',
  mixins: [listenersMixin],
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
