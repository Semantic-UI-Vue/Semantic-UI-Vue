import { SemanticUIVueMixin, textAlign } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiHeader',
  mixins: [SemanticUIVueMixin],
  props: {
    color: Enum.Color(),
    content: String,
    dividing: Boolean,
    disabled: Boolean,
    floated: Enum(['left', 'right']),
    icon: Boolean,
    image: {
      type: String,
      description: 'Add an image by img src or pass an Image.',
    },
    size: Enum.Size(),
    sub: Boolean,
    textAlign: Enum(['left', 'right', 'center', 'justify']),
    block: Boolean,
    attached: Enum(['top', 'bottom'], {
      type: Boolean,
    }),
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.floated && `${this.floated} floated`,
          textAlign(this.textAlign),
          this.attached,
          this.attached && 'attached',
          this.color,
          this.size,
          this.block && 'block',
          this.dividing && 'dividing',
          this.icon && 'icon',
          this.image && 'image',
          this.sub && 'sub',
          this.disabled && 'disabled',
          'header',
        )}
      >
        {this.image && <img src={this.image} class='ui image' />}
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
};
