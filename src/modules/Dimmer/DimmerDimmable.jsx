import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiDimmerDimmable',
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
