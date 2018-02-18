import { classes, getChildProps, getElementType, num, textAlign } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiGrid',
  description: 'A grid is used to harmonize negative space in a layout.',
  props: {
    celled: Enum(['internally'], {
      type: Boolean,
      description: 'A grid can have rows divided into cells.',
    }),
    centered: {
      type: Boolean,
      description: 'A grid can have its columns centered.',
    },
    columns: {
      type: Number,
      description: 'Represents column count per row in Grid.',
    },
    divided: Enum(['vertically'], {
      type: Boolean,
      description: 'A grid can have dividers between its columns.',
    }),
    doubling: {
      type: Boolean,
      description: 'A grid can double its column width on tablet and mobile sizes.',
    },
    padded: Enum(['horizontally', 'vertically'], {
      type: Boolean,
      description: 'A grid can preserve its vertical and horizontal gutters on first and last columns.',
    }),
    relaxed: Enum(['very'], {
      type: Boolean,
      description: 'A grid can increase its gutters to allow for more negative space.',
    }),
    stackable: {
      type: Boolean,
      description: 'A grid can have its columns stack on-top of each other after reaching mobile breakpoints.',
    },
    textAlign: Enum.TextAlign({
      description: 'A grid can specify its text alignment.',
    }),
    verticalAlign: Enum.VerticalAlign({
      description: 'A grid can specify its vertical alignment to have all its columns vertically centered.',
    }),
    container: {
      type: Boolean,
      description: 'A grid can be combined with a container to use the available layout and alignment.',
    },
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
          this.padded,
          this.padded && 'padded',
          this.verticalAlign,
          this.verticalAlign && 'aligned',
          textAlign(this.textAlign),
          this.centered && 'centered',
          this.divided,
          (this.divided || this.divided === '') && 'divided',
          this.celled,
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
