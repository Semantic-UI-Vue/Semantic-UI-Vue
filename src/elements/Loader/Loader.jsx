import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiLoader',
  props: {
    active: Boolean,
    content: String,
    indeterminate: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.indeterminate && 'indeterminate',
          this.active && 'active',
          (this.content || this.$slots.default) && 'text',
          'loader',
        )}
      >
        {this.content || this.$slots.default}
      </ElementType>
    );
  },
};
