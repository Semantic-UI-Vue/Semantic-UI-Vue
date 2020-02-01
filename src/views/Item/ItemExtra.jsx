import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiItemExtra',
  mixins: [SemanticUIVueMixin],
  description:
    'An item can contain extra content meant to be formatted separately from the main content',
  props: {},
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType class={this.classes('extra')}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiItem',
  },
};
