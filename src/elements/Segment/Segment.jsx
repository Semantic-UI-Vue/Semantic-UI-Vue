import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiSegment',
  props: {
    inverted: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.inverted && 'inverted',
          'segment',
        )}
      >
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
};
