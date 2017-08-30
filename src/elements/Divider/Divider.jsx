import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiDivider',
  props: {
    clearing: Boolean,
    fitted: Boolean,
    hidden: Boolean,
    horizontal: Boolean,
    inverted: Boolean,
    vertical: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.clearing && 'clearing',
          this.fitted && 'fitted',
          this.hidden && 'hidden',
          this.horizontal && 'horizontal',
          this.vertical && 'vertical',
          this.inverted && 'inverted',
          'divider',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
