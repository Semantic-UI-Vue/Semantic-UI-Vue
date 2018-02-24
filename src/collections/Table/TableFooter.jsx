import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiTableFooter',
  mixins: [listenersMixin],
  props: {
    fullWidth: Boolean,
  },
  render() {
    const ElementType = getElementType(this, 'tfoot');
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
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
