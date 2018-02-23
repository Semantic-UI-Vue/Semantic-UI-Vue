import { classes, getChildProps, getElementType, listenersMixin, num } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiButtonGroup',
  mixins: [listenersMixin],
  props: {
    attached: Enum(['top', 'bottom']),
    widths: Number,
    vertical: Boolean,
    labeled: Boolean,
    icons: Boolean,
    color: Enum.Color(),
    basic: Boolean,
    size: Enum.Size(),
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.size,
          this.color,
          this.attached,
          this.attached && 'attached',
          num(this.widths),
          this.vertical && 'vertical',
          this.labeled && 'labeled',
          this.icons && 'icon',
          this.basic && 'basic',
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
