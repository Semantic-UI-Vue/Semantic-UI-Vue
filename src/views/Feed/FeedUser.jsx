import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiFeedUser',
  description: 'A feed can contain a user element',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content',
    },
  },
  render() {
    const ElementType = getElementType(this, 'a');
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'user',
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
