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
        {this.content ? this.content : this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
