import { getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiMenuMenu',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="menu">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMenu',
  },
};
