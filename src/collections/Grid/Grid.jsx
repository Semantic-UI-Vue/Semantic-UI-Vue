import { classes, getChildProps, getElementType, num } from 'src/lib';

export default {
  name: 'SuiGrid',
  description: 'A grid is used to harmonize negative space in a layout.',
  props: {
    columns: {
      type: Number,
      description: 'Represents column count per row in Grid.',
    },
    padded: {
      type: Boolean,
      description: 'A grid can preserve its vertical and horizontal gutters on first and last columns.',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui', this.padded && 'padded', this.columns && `${num(this.columns)} column`, 'grid',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
