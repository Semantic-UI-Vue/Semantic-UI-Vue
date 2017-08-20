import { getChildProps, getElementType } from 'src/lib';

export default {
  name: 'SuiHeader',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="header">
        {this.$slots.default}
      </ElementType>
    );
  },
};
