import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiFeedUser',
  mixins: [listenersMixin],
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
        {...this.generateListeners()}
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
