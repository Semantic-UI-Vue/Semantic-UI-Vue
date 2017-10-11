import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiFeedUser',
  props: {
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'user',
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
