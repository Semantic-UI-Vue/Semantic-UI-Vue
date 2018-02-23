import { getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiHeaderContent',
  mixins: [listenersMixin],
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="content">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiHeader',
  },
};
