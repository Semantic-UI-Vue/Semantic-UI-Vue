import { getChildProps, getElementType } from 'src/lib';

export default {
  name: 'SuiHeaderSubheader',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="sub header">
        {this.$slots.default}
      </ElementType>
    );
  },
};
