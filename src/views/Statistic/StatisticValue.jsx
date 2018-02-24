import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiStatisticValue',
  mixins: [listenersMixin],
  props: {
    text: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
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
