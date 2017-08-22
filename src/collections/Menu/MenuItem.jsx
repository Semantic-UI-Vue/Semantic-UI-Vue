import { classes, getChildProps, getElementType } from 'src/lib';

export default {
  name: 'SuiMenuItem',
  props: {
    active: Boolean,
    content: String,
    link: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(this.active && 'active', this.link && 'link', 'item')}
      >
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMenu',
  },
};
