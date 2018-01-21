import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiTableCell',
  props: {
    negative: Boolean,
    positive: Boolean,
    selected: Boolean,
    textAlign: Enum(['left', 'right']),
    warning: Boolean,
    singleLine: Boolean,
    collapsing: Boolean,
    disabled: Boolean,
  },
  render() {
    const ElementType = getElementType(this, 'td');
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          this.textAlign,
          this.textAlign && 'aligned',
          this.negative && 'negative',
          this.positive && 'positive',
          this.warning && 'warning',
          this.singleLine && 'single line',
          this.collapsing && 'collapsing',
          this.disabled && 'disabled',
        )}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiTable',
  },
};
