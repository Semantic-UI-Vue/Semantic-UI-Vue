import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiItemGroup',
  description: 'A group of items',
  props: {
    unstackable: {
      type: Boolean,
      description: 'A table can specify how it stacks items responsively',
    },
    divided: {
      type: Boolean,
      description: 'Items can be divided to better distinguish between grouped content',
    },
    relaxed: {
      type: Boolean,
      description: 'A group of items can relax its padding to provide more negative space',
    },
    veryRelaxed: {
      type: Boolean,
      description: 'A group of items can very relax its padding to provide even more negative space',
    },
    link: {
      type: Boolean,
      description: 'An item can be formatted so that the entire contents link to another page',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this) }
        class={classes(
          'ui',
          this.unstackable && 'unstackable',
          this.divided && 'divided',
          this.relaxed && !this.veryRelaxed && 'relaxed',
          this.veryRelaxed && 'very relaxed',
          this.link && 'link',
          'items',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiItem',
  },
};
