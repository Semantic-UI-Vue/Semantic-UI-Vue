import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiFeedDate',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content'
    }
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
