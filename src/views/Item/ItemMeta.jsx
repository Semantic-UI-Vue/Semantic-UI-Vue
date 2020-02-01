import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiItemMeta',
  mixins: [SemanticUIVueMixin],
  description: 'An item can contain content metadata',
  props: {},
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType class={this.classes('meta')}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiItem',
  },
};
