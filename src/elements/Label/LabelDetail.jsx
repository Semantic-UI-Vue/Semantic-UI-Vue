import { getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiLabelDetail',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="detail">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiLabel',
  },
};
