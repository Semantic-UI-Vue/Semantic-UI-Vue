import { classes, getChildProps, getElementType } from 'src/lib';
import { Enum } from 'src/lib/PropTypes';

export default {
  name: 'SuiHeader',
  props: {
    color: Enum.Color,
    content: String,
    dividing: Boolean,
    floated: Enum(['left', 'right']),
    size: Enum.Size,
    sub: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.floated && `${this.floated} floated`,
          this.color,
          this.size,
          this.dividing && 'dividing',
          this.sub && 'sub',
          'header',
        )}
      >
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
};
