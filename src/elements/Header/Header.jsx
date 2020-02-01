import { SemanticUIVueMixin, textAlign } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import Icon from '../Icon/Icon';

export default {
  name: 'SuiHeader',
  mixins: [SemanticUIVueMixin],
  props: {
    color: Enum.Color(),
    content: String,
    dividing: Boolean,
    disabled: Boolean,
    floated: Enum(['left', 'right']),
    icon: {
      type: [Boolean, String],
      default: false,
    },
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
    inverted: Boolean,
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
          this.icon && 'icon',
          this.block && 'block',
          this.dividing && 'dividing',
          this.image && 'image',
          this.sub && 'sub',
          this.disabled && 'disabled',
          this.inverted && 'inverted',
          'header',
        )}
      >
        {this.icon !== !!this.icon && <Icon name={this.icon} />}
        {this.image && <img src={this.image} class="ui image" />}
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
};
