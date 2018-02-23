import { classes, getChildProps, getElementType, listenersMixin, num } from '../../lib';

export default {
  name: 'SuiCardGroup',
  mixins: [listenersMixin],
  props: {
    itemsPerRow: Number,
    stackable: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          num(this.itemsPerRow),
          this.stackable && 'stackable',
          'cards',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiCard',
  },
};
