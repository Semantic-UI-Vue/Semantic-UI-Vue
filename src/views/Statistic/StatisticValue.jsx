import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiStatisticValue',
  props: {
    text: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          this.text && 'text',
          'value',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiStatistic',
  },
};
