import { getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiMenuHeader',
  props: {
    active: Boolean,
    content: String,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="header">
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMenu',
  },
};
