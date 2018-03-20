import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiReveal',
  mixins: [SemanticUIVueMixin],
  props: {
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
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.animated,
          'reveal',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
