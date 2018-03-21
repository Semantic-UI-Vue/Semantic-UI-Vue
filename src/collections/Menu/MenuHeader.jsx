import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiMenuHeader',
  mixins: [SemanticUIVueMixin],
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content.',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType {...this.getChildPropsAndListeners()} class="header">
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMenu',
  },
};
