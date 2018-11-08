import { SemanticUIVueMixin } from '../../lib';
import SuiStep from './Step';

export default {
  name: 'SuiStepGroup',
  components: { SuiStep },
  mixins: [SemanticUIVueMixin],
  props: {
    ordered: Boolean,
    steps: Array,
    vertical: Boolean,
    stackable: Boolean,
    fluid: Boolean
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.ordered && 'ordered',
          this.vertical && 'vertical',
          this.fluid && 'fluid',
          this.stackable && 'tablet stackable',
          'steps',
        )}
      >
        {this.steps ? this.steps.map(props => (
          <SuiStep {...{ props }} />
        )) : this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiStep',
  },
};
