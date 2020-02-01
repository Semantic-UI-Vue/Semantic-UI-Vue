import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiFeedUser',
  mixins: [SemanticUIVueMixin],
  description: 'A feed can contain a user element',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content',
    },
  },
  render() {
    const ElementType = this.getElementType('a');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('user')}
      >
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
