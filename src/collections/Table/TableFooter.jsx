import { getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiTableFooter',
  render() {
    const ElementType = getElementType(this, 'tfoot');
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
