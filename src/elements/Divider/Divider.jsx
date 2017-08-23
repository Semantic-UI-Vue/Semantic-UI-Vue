import { classes, getChildProps, getElementType } from 'src/lib';

export default {
  name: 'SuiDivider',
  props: {
    fitted: Boolean,
    horizontal: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('ui', this.fitted && 'fitted', this.horizontal && 'horizontal', 'divider')}
      >
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
};
