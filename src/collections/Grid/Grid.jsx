import { classes, getChildProps, getElementType, num, textAlign } from '../../lib';
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
    doubling: Boolean,
    padded: {
      type: Boolean,
      description: 'A grid can preserve its vertical and horizontal gutters on first and last columns.',
    },
    relaxed: [Boolean, String],
    stackable: Boolean,
    verticalAlign: Enum(['bottom', 'middle', 'top']),
    textAlign: Enum(['left', 'right', 'center', 'justify']),
    container: Boolean,
    reversed: Enum(['mobile', 'tablet', 'computer'], {
      description: 'A grid can specify that its columns should reverse order at different device types.',
    }),
    verticallyReversed: Enum(['mobile', 'tablet', 'computer'], {
      description: 'A grid can specify that its rows should reverse order at different device types.',
    }),
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.reversed && `${this.reversed} reversed`,
          this.verticallyReversed && `${this.verticallyReversed} vertically reversed`,
          num(this.columns),
          this.columns && 'column',
          this.stackable && 'stackable',
          this.doubling && 'doubling',
          this.padded && 'padded',
          this.verticalAlign,
          this.verticalAlign && 'aligned',
          textAlign(this.textAlign),
          this.centered && 'centered',
          this.divided,
          (this.divided || this.divided === '') && 'divided',
          this.celled && 'celled',
          this.relaxed !== true && this.relaxed,
          this.relaxed && 'relaxed',
          'grid',
          this.container && 'container',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
