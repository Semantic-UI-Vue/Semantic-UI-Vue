import { getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiTableRow',
  render() {
    const ElementType = getElementType(this, 'tr');
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
