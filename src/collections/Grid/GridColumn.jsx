import { getChildProps, getElementType } from 'src/lib';

export default {
  name: 'SuiGridColumn',
  description: 'A column sub-component for Grid.',
  props: {
    width: {
      type: Number,
      description: 'Represents width of column.',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="column">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiGrid',
  },
};
