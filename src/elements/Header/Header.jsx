import { classes, getChildProps, getElementType } from 'src/lib';
import { Enum } from 'src/lib/PropTypes';

export default {
  name: 'SuiHeader',
  props: {
    color: Enum.Color,
    content: String,
    size: Enum.Size,
    sub: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('ui', this.color, this.size, this.sub && 'sub', 'header')}
      >
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
};
