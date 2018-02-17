import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiHeader',
  props: {
    color: Enum.Color(),
    content: String,
    dividing: Boolean,
    floated: Enum(['left', 'right']),
    icon: Boolean,
    image: Boolean,
    size: Enum.Size(),
    sub: Boolean,
    textAlign: Enum(['left', 'right', 'center', 'justify']),
    block: Boolean,
    attached: Enum(['top', 'bottom'], {
      type: Boolean,
    }),
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.floated && `${this.floated} floated`,
          this.textAlign && (this.textAlign === 'justify' ? 'justified' : `${this.textAlign} aligned`),
          this.attached,
          this.attached && 'attached',
          this.color,
          this.size,
          this.block && 'block',
          this.dividing && 'dividing',
          this.icon && 'icon',
          this.image && 'image',
          this.sub && 'sub',
          'header',
        )}
      >
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
};
