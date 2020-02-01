import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiFeedDate',
  mixins: [SemanticUIVueMixin],
  description: 'An event or an event summary can contain a date',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('date')}
      >
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
