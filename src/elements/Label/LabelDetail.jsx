import { getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiLabelDetail',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="detail">
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
  meta: {
    parent: 'Label',
  },
};
