import { classes, getChildProps, getElementType, num } from '../../lib';

export default {
  name: 'SuiGridRow',
  description: 'A row sub-component for Grid',
  props: {
    columns: Number,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          num(this.columns),
          this.columns && 'column',
          'row',
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
