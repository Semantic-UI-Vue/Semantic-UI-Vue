import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiItemExtra',
  description: 'An item can contain extra content meant to be formatted separately from the main content',
  props: {},
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this) }
        class={classes('extra')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiItem',
  },
};
