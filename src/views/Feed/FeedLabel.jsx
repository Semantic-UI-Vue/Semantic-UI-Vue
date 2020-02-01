import { SemanticUIVueMixin } from '../../lib';
import { Icon, Image } from '../../elements';

export default {
  name: 'SuiFeedLabel',
  mixins: [SemanticUIVueMixin],
  description: 'An event can contain an image or icon label',
  props: {
    content: {
      type: String,
      description: 'Shorthand for primary content',
    },
    image: {
      type: String,
      description: 'An event can contain image label',
    },
    icon: {
      type: String,
      description: 'An event can contain icon label',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('label')}
      >
        {this.$slots.default || [
          this.content,
          this.icon && <Icon name={this.icon} />,
          this.image && <Image src={this.image} />,
        ]}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
