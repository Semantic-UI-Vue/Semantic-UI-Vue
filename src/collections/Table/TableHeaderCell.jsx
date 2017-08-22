import { getChildProps, getElementType } from 'src/lib';

export default {
  name: 'SuiTableHeaderCell',
  render() {
    const ElementType = getElementType(this, 'th');
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
