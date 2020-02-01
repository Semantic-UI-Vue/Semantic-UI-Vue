import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiItemGroup',
  mixins: [SemanticUIVueMixin],
  description: 'A group of items',
  props: {
    unstackable: {
      type: Boolean,
      description: 'A table can specify how it stacks items responsively',
    },
    divided: {
      type: Boolean,
      description:
        'Items can be divided to better distinguish between grouped content',
    },
    relaxed: Enum(['very'], {
      type: Boolean,
      description:
        'A group of items can relax its padding to provide more negative space',
    }),
    link: {
      type: Boolean,
      description:
        'An item can be formatted so that the entire contents link to another page',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        class={this.classes(
          'ui',
          this.unstackable && 'unstackable',
          this.divided && 'divided',
          this.relaxed,
          this.relaxed && 'relaxed',
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
