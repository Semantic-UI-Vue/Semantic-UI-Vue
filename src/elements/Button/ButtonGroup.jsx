import { classes, getChildProps, getElementType, num } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiButtonGroup',
  props: {
    attached: Enum(['top', 'bottom']),
    widths: Number,
    vertical: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.attached,
          this.attached && 'attached',
          num(this.widths),
          this.vertical && 'vertical',
          'buttons',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiButton',
  },
};
