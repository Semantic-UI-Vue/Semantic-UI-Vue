import { getChildProps, getElementType } from 'src/lib';

export default {
  name: 'SuiGridColumn',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="column">
        {this.$slots.default}
      </ElementType>
    );
  },
};
