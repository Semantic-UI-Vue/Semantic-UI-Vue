import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiReveal',
  mixins: [SemanticUIVueMixin],
  props: {
    active: {
      type: Boolean,
      description: 'An active reveal displays its hidden content.',
    },
    animated: Enum([
      'fade',
      'small fade',
      'move',
      'move right',
      'move up',
      'move down',
      'rotate',
      'rotate left',
    ]),
    disabled: {
      type: Boolean,
      description: 'A disabled reveal will not animate when hovered.',
    },
    instant: {
      type: Boolean,
      description: 'An element can show its content without delay.',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.animated,
          this.disabled && 'disabled',
          this.instant && 'instant',
          this.active && 'active',
          'reveal',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
