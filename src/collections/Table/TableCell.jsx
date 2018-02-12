import { classes, getChildProps, getElementType, num } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiTableCell',
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
    width: Number,
    state: Enum.State(),
    verticalAlign: Enum.VerticalAlign(),
  },
  render() {
    const ElementType = getElementType(this, 'td');
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          this.textAlign,
          this.verticalAlign,
          (this.textAlign || this.verticalAlign) && 'aligned',
          this.negative && 'negative',
          this.positive && 'positive',
          this.warning && 'warning',
          this.singleLine && 'single line',
          this.collapsing && 'collapsing',
          this.disabled && 'disabled',
          this.selectable && 'selectable',
          num(this.width),
          this.width && 'wide',
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
