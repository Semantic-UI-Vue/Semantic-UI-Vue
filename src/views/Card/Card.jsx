import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiCard',
  props: {
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          'card',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
