import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiItemHeader',
  description: 'An item can contain a header',
  props: {
    href: {
      type: String,
      description: 'Specifies a linked document, resource, or location',
    },
  },
  render() {
    const ElementType = (this.href ? 'a' : getElementType(this));
    return (
      <ElementType
        {...getChildProps(this) }
        href={this.href}
        class={classes('header')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiItem',
  },
};
