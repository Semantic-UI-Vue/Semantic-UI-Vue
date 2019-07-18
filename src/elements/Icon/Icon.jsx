import { SemanticUIVueMixin, iconFlipped, iconRotation } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiIcon',
  mixins: [SemanticUIVueMixin],
  props: {
    bordered: {
      type: Boolean,
      description: 'Add squared border to icon.',
    },
    circular: {
      type: Boolean,
      description: 'Add circular border to icon.',
    },
    color: Enum.Color({
      description: 'Icon color.',
    }),
    disabled: {
      type: Boolean,
      description: 'Reducing icon opacity to create "disabled icon" effect.',
    },
    fitted: {
      type: Boolean,
      description: 'Remove margin from icon',
    },
    flipped: Enum.Direction({
      description: 'Icon flip direction.',
    }),
    inverted: {
      type: Boolean,
      description: 'Add black background to icon, also change icon color to contrasted variant.',
    },
    link: {
      type: Boolean,
      description: 'Add hover animation to icon.',
    },
    loading: {
      type: Boolean,
      description: 'Add rotate animation to icon.',
    },
    name: {
      type: String,
      required: true,
      description: 'Icon name.',
    },
    rotated: Enum.RotateDirection({
      description: 'Icon rotate direction.',
    }),
    size: Enum.Size({
      description: 'Icon size.',
    }),
  },
  render() {
    const ElementType = this.getElementType('i');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          iconFlipped(this.flipped),
          iconRotation(this.rotated),
          this.bordered && 'bordered',
          this.circular && 'circular',
          this.inverted && 'inverted',
          this.color,
          this.name,
          this.size,
          this.disabled && 'disabled',
          this.fitted && 'fitted',
          this.link && 'link',
          this.loading && 'loading',
          'icon',
        )}
      />
    );
  },
};
