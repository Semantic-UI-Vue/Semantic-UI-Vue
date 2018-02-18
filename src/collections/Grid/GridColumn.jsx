import { classes, getChildProps, getElementType, num, textAlign } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiGridColumn',
  description: 'A column sub-component for Grid.',
  props: {
    color: Enum.Color(),
    centered: Boolean,
    width: {
      type: Number,
      description: 'Represents width of column.',
    },
    floated: Enum(['left', 'right']),
    textAlign: Enum(['left', 'right', 'center', 'justify']),
    only: Enum(['mobile', 'tablet', 'computer', 'widescreen', 'large screen'], {
      description: 'A column can appear only for a specific device, or screen sizes.',
    }),
    stretched: {
      type: Boolean,
      description: 'A column can stretch its contents to take up the entire grid or row height.',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          this.floated && `${this.floated} floated`,
          textAlign(this.textAlign),
          num(this.width),
          this.width && 'wide',
          this.only && `${this.only} only`,
          this.centered && 'centered',
          this.stretched && 'stretched',
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
