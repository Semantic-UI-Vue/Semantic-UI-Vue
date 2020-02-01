import { SemanticUIVueMixin, textAlign } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiGrid',
  mixins: [SemanticUIVueMixin],
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
    columns: Enum.Number({
      choices: ['equal'],
      description: 'Represents column count per row in Grid.',
    }),
    container: {
      type: Boolean,
      description:
        'A grid can be combined with a container to use the available layout and alignment.',
    },
    divided: Enum(['vertically'], {
      type: Boolean,
      description: 'A grid can have dividers between its columns.',
    }),
    doubling: {
      type: Boolean,
      description:
        'A grid can double its column width on tablet and mobile sizes.',
    },
    padded: Enum(['horizontally', 'vertically'], {
      type: Boolean,
      description:
        'A grid can preserve its vertical and horizontal gutters on first and last columns.',
    }),
    relaxed: Enum(['very'], {
      type: Boolean,
      description:
        'A grid can increase its gutters to allow for more negative space.',
    }),
    reversed: Enum(['mobile', 'tablet', 'computer'], {
      description:
        'A grid can specify that its columns should reverse order at different device types.',
    }),
    stackable: {
      type: Boolean,
      description:
        'A grid can have its columns stack on-top of each other after reaching mobile breakpoints.',
    },
    stretched: {
      type: Boolean,
      description:
        'A grid can stretch its contents to take up the entire grid height.',
    },
    textAlign: Enum.TextAlign({
      description: 'A grid can specify its text alignment.',
    }),
    verticalAlign: Enum.VerticalAlign({
      description:
        'A grid can specify its vertical alignment to have all its columns vertically centered.',
    }),
    verticallyReversed: Enum(['mobile', 'tablet', 'computer'], {
      description:
        'A grid can specify that its rows should reverse order at different device types.',
    }),
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.reversed && `${this.reversed} reversed`,
          this.verticallyReversed &&
            `${this.verticallyReversed} vertically reversed`,
          this.columns && `${this.num(this.columns)} column`,
          this.stackable && 'stackable',
          this.stretched && 'stretched',
          this.doubling && 'doubling',
          this.padded,
          this.padded && 'padded',
          this.verticalAlign,
          this.verticalAlign && 'aligned',
          textAlign(this.textAlign),
          this.centered && 'centered',
          this.divided,
          this.divided && 'divided',
          this.celled,
          this.celled && 'celled',
          this.relaxed,
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
