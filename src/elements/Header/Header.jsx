import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiHeader',
  props: {
    color: Enum.Color,
    content: String,
    dividing: Boolean,
    floated: Enum(['left', 'right']),
    icon: Boolean,
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
          this.icon && 'icon',
          this.sub && 'sub',
          'header',
        )}
      >
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
};
