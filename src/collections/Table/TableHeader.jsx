import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiTableHeader',
  props: {
    fullWidth: Boolean,
  },
  render() {
    const ElementType = getElementType(this, 'thead');
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
