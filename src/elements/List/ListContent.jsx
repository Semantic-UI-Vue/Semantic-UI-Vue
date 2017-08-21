import { getChildProps, getElementType } from 'src/lib';

export default {
  name: 'SuiListContent',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="content">
        {this.$slots.default}
      </ElementType>
    );
  },
};
