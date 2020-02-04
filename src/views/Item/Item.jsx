import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiItem',
  mixins: [SemanticUIVueMixin],
  description:
    'An item view presents large collections of site content for display',
  props: {
    href: {
      type: String,
      description:
        'Specifies a linked document, resource, or location. Only useful if the ItemGroup contains the "link" class.',
    },
  },
  render() {
    const ElementType = this.href ? 'a' : this.getElementType();
    return (
      <ElementType href={this.href} class={this.classes('item')}>
        {this.$slots.default}
      </ElementType>
    );
  },
};
