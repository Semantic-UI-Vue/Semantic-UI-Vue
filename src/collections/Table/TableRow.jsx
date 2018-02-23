import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiTableRow',
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
    const ElementType = getElementType(this, 'tr');
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
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
