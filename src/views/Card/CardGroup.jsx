import { classes, getChildProps, getElementType, listenersMixin, num } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiCardGroup',
  mixins: [listenersMixin],
  props: {
    itemsPerRow: Enum.Number(),
    stackable: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
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
