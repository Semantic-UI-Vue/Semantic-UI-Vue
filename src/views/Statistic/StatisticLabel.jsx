import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiStatisticLabel',
  mixins: [listenersMixin],
  props: {
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('label')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiStatistic',
  },
};
