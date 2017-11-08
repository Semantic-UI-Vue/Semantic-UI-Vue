import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiFeedDate',
  description: 'An event or an event summary can contain a date',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'date',
        )}
      >
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
