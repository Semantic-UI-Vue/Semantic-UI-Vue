import { getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiTableCell',
  render() {
    const ElementType = getElementType(this, 'td');
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
