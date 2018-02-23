import { getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiTableBody',
  render() {
    const ElementType = getElementType(this, 'tbody');
    return (
      <ElementType {...getChildProps(this)}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiTable',
  },
};
