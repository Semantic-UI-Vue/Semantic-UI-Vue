import { classes, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiImage',
  props: {
    disabled: Boolean,
    hidden: Boolean,
    size: Enum(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
    spaced: Enum(['left', 'right'], { type: Boolean }),
    shape: Enum(['rounded', 'circular']),
    src: {
      type: String,
      required: true,
    },
    wrapped: Boolean,
  },
  render() {
    const ElementType = getElementType(this, 'div');
    const classNames = classes(
      'ui',
      this.size,
      this.shape,
      this.spaced !== true && this.spaced,
      this.spaced && 'spaced',
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
