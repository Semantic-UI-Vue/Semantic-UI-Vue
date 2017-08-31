import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiTableRow',
  props: {
    negative: Boolean,
    positive: Boolean,
    selected: Boolean,
    textAlign: Enum(['left', 'right']),
    warning: Boolean,
  },
  render() {
    const ElementType = getElementType(this, 'tr');
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          this.textAlign,
          this.textAlign && 'aligned',
          this.negative && 'negative',
          this.positive && 'positive',
          this.selected && 'selected',
          this.warning && 'warning',
        )}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiTable',
  },
};
