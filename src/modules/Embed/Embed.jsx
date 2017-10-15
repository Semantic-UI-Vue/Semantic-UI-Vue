import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiEmbed',
  props: {
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          'embed'
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
