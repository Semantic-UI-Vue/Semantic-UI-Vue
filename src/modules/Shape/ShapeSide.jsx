import { classes, getElementType, getChildProps } from '../../lib';

export default {
  name: 'SuiShapeSide',
  props: {
    active: {
      type: Boolean,
      default: false,
      description: 'Set the first side to be showed.',
    }
  },
  render() {
    const ElementType = getElementType(this);

    return(
      <ElementType
        {...getChildProps(this)}
        class={classes(
          this.active && 'active',
          'side',
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
