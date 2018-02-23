import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiDimmerDimmable',
  mixins: [listenersMixin],
  props: {
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'dimmable',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiDimmer',
  },
};
