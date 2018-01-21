import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiTableFooter',
  props: {
    fullWidth: Boolean,
  },
  render() {
    const ElementType = getElementType(this, 'tfoot');
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(this.fullWidth && 'full-width')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiTable',
  },
};
