import { SemanticUIVueMixin, textAlign } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiGridRow',
  mixins: [SemanticUIVueMixin],
  description: 'A row sub-component for Grid',
  props: {
    columns: Enum.Number({
      description: 'Represents column count per line in Row.',
    }),
    centered: {
      type: Boolean,
      description: 'A row can have its columns centered.',
    },
    only: Enum(['mobile', 'tablet', 'computer', 'widescreen', 'large screen'], {
      description:
        'A row can appear only for a specific device, or screen sizes.',
    }),
    divided: {
      type: Boolean,
      description: 'A row can have dividers between its columns.',
    },
    color: Enum.Color({
      description: 'A grid row can be colored.',
    }),
    reversed: Enum(['mobile', 'tablet', 'computer'], {
      description:
        'A row can specify that its columns should reverse order at different device types.',
    }),
    stretched: {
      type: Boolean,
      description:
        'A row can stretch its contents to take up the entire column height.',
    },
    textAlign: Enum.TextAlign({
      description: 'A row can specify its text alignment.',
    }),
    verticalAlign: Enum.VerticalAlign({
      description:
        'A row can specify its vertical alignment to have all its columns vertically centered.',
    }),
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          this.reversed && `${this.reversed} reversed`,
          this.only && `${this.only} only`,
          this.divided && 'divided',
          textAlign(this.textAlign),
          this.verticalAlign && `${this.verticalAlign} aligned`,
          this.centered && 'centered',
          this.stretched && 'stretched',
          this.color,
          this.columns && `${this.num(this.columns)} column`,
          'row',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiGrid',
  },
};
