import { getChildProps, getElementType } from 'src/lib';

export default {
  name: 'SuiMenuItem',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="item">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMenu',
  },
};
