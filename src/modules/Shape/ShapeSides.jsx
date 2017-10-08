import { classes, getElementType, getChildProps } from '../../lib';

export default {
  name: 'SuiShapeSides',
  render() {
    const ElementType = getElementType(this);

    return(
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'sides'
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiShape',
  },
};
