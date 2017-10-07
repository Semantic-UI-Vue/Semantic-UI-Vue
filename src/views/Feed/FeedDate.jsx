import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiFeedDate',
  props: {
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          'feed',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
