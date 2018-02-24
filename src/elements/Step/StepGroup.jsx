import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import SuiStep from './Step';

export default {
  name: 'SuiStepGroup',
  components: { SuiStep },
  mixins: [listenersMixin],
  props: {
    ordered: Boolean,
    steps: Array,
    vertical: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
        class={classes(
          'ui',
          this.ordered && 'ordered',
          this.vertical && 'vertical',
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
