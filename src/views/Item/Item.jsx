import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiItem',
  description: 'An item view presents large collections of site content for display',
  props: {
    href: {
      type: String,
      description: 'Specifies a linked document, resource, or location. Only useful if the ItemGroup contains the "link" class.',
    },
  },
  render() {
    const ElementType = (this.href ? 'a' : getElementType(this));
    return (
      <ElementType
        {...getChildProps(this) }
        href={this.href}
        class={classes('item')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
