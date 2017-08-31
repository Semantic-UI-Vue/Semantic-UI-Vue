import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiTable',
  description: 'A table displays a collections of data grouped into rows.',
  props: {
    basic: Enum(['very'], {
      type: Boolean,
      description: 'A table can reduce its complexity to increase readability.',
    }),
    compact: Enum(['very'], {
      type: Boolean,
      description: 'A table may sometimes need to be more compact to make more rows visible at a time.',
    }),
    textAlign: Enum(['left', 'right']),
  },
  render() {
    const ElementType = getElementType(this, 'table');
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.textAlign,
          this.textAlign && 'aligned',
          this.basic !== true && this.basic,
          this.basic && 'basic',
          this.compact !== true && this.compact,
          this.compact && 'compact',
          'table',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
