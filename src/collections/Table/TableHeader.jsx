import { getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiTableHeader',
  render() {
    const ElementType = getElementType(this, 'thead');
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
