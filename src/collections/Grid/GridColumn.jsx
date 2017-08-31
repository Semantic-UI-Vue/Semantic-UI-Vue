import { classes, getChildProps, getElementType, num } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiGridColumn',
  description: 'A column sub-component for Grid.',
  props: {
    color: Enum.Color,
    width: {
      type: Number,
      description: 'Represents width of column.',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          num(this.width),
          this.width && 'wide',
          this.color,
          'column',
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
