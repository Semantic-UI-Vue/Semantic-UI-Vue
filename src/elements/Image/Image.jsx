import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiImage',
  mixins: [SemanticUIVueMixin],
  props: {
    avatar: {
      type: Boolean,
      description: 'An image may be formatted to appear inline with text as an avatar.',
    },
    disabled: Boolean,
    hidden: Boolean,
    size: Enum.Size(),
    spaced: Enum(['left', 'right'], { type: Boolean }),
    shape: Enum(['rounded', 'circular']),
    src: {
      type: String,
      required: true,
    },
    floated: Enum(['left', 'right']),
    centered: Boolean,
    wrapped: Boolean,
  },
  render() {
    const ElementType = this.getElementType('div');
    const classNames = this.classes(
      'ui',
      this.avatar && 'avatar',
      this.size,
      this.shape,
      this.floated && `${this.floated} floated`,
      this.centered && 'centered',
      this.spaced, this.spaced && 'spaced',
      this.hidden && 'hidden',
      this.disabled && 'disabled',
      'image',
    );

    if (this.wrapped) {
      return (
        <ElementType class={classNames}>
          <img src={this.src} />
        </ElementType>
      );
    }

    return <img class={classNames} src={this.src} />;
  },
};
