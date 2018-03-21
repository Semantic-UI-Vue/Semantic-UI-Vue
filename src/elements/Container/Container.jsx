import { SemanticUIVueMixin, textAlign } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiContainer',
  mixins: [SemanticUIVueMixin],
  props: {
    fluid: {
      type: Boolean,
      description: 'Container has no maximum width.',
    },
    text: {
      type: Boolean,
      description: 'Reduce maximum width to more naturally accommodate text.',
    },
    textAlign: Enum.TextAlign({
      description: 'Align container text.',
    }),
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          textAlign(this.textAlign),
          this.text && 'text',
          this.fluid && 'fluid',
          'container',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
