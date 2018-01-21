import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiTableHeaderCell',
  props: {
    negative: Boolean,
    positive: Boolean,
    selected: Boolean,
    textAlign: Enum(['left', 'right', 'center']),
    warning: Boolean,
    singleLine: Boolean,
    collapsing: Boolean,
    disabled: Boolean,
    selectable: Boolean,
  },
  render() {
    const ElementType = getElementType(this, 'th');
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
          this.selectable && 'selectable',
        )}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiTable',
  },
};
