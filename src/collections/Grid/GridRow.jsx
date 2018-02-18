import { classes, getChildProps, getElementType, num } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiGridRow',
  description: 'A row sub-component for Grid',
  props: {
    columns: Number,
    centered: {
      type: Boolean,
      description: 'A row can have its columns centered.',
    },
    only: Enum(['mobile', 'tablet', 'computer', 'widescreen', 'large screen'], {
      description: 'A row can appear only for a specific device, or screen sizes.',
    }),
    divided: {
      type: Boolean,
      description: 'A row can have dividers between its columns.',
    },
    color: Enum.Color({
      description: 'A grid row can be colored.',
    }),
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          this.divided && 'divided',
          num(this.columns),
          this.only && `${this.only} only`,
          this.centered && 'centered',
          this.color,
          this.columns && 'column',
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
