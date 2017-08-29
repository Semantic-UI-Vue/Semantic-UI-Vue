import { classes, getChildProps, getElementType, num } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiGrid',
  description: 'A grid is used to harmonize negative space in a layout.',
  props: {
    celled: Boolean,
    centered: Boolean,
    columns: {
      type: Number,
      description: 'Represents column count per row in Grid.',
    },
    divided: Enum(['vertically'], {
      type: Boolean,
    }),
    padded: {
      type: Boolean,
      description: 'A grid can preserve its vertical and horizontal gutters on first and last columns.',
    },
    relaxed: [Boolean, String],
    stackable: Boolean,
    verticalAlign: Enum(['bottom', 'middle', 'top']),
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.verticalAlign,
          this.verticalAlign && 'aligned',
          this.padded && 'padded',
          this.divided,
          (this.divided || this.divided === '') && 'divided',
          this.centered && 'centered',
          this.celled && 'celled',
          num(this.columns),
          this.columns && 'column',
          this.relaxed !== true && this.relaxed,
          this.relaxed && 'relaxed',
          this.stackable && 'stackable',
          'grid',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
