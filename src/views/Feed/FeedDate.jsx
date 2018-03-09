import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiFeedDate',
  mixins: [listenersMixin],
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
        {...this.generateListeners()}
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
