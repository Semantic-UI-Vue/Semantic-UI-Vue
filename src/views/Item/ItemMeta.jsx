import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiItemMeta',
  description: 'An item can contain content metadata',
  props: {},
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this) }
        class={classes('meta')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiItem',
  },
};
