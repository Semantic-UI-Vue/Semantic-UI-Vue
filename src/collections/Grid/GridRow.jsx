import { getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiGridRow',
  description: 'A row sub-component for Grid',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="row">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiGrid',
  },
};
