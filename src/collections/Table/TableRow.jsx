import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiTableRow',
  mixins: [SemanticUIVueMixin],
  props: {
    negative: Boolean,
    positive: Boolean,
    selected: Boolean,
    textAlign: Enum(['left', 'right', 'center']),
    warning: Boolean,
    state: Enum.State(),
    verticalAlign: Enum.VerticalAlign(),
  },
  render() {
    const ElementType = this.getElementType('tr');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          this.textAlign && `${this.textAlign} aligned`,
          this.verticalAlign && `${this.verticalAlign} aligned`,
          this.negative && 'negative',
          this.positive && 'positive',
          this.selected && 'selected',
          this.warning && 'warning',
          this.state,
        )}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiTable',
  },
};
