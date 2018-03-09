import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiItemMeta',
  mixins: [listenersMixin],
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
