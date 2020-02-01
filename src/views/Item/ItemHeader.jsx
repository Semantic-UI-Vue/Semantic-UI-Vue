import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiItemHeader',
  mixins: [SemanticUIVueMixin],
  description: 'An item can contain a header',
  props: {
    href: {
      type: String,
      description: 'Specifies a linked document, resource, or location',
    },
  },
  render() {
    const ElementType = this.href ? 'a' : this.getElementType();
    return (
      <ElementType href={this.href} class={this.classes('header')}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiItem',
  },
};
