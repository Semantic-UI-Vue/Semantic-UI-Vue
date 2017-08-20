import { getChildProps, getElementType } from 'src/lib';

export default {
  name: 'SuiMenuItem',
  props: {
    active: Boolean,
    content: String,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class={`item${this.active ? ' active' : ''}`}>
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMenu',
  },
};
