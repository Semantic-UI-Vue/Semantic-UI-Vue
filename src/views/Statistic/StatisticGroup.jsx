import { classes, getChildProps, getElementType, num } from '../../lib';

export default {
  name: 'SuiStatisticsGroup',
  props: {
    horizontal: Boolean,
    columns: Number,
  },
  render() {
    const ElementType = getElementType(this);

    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          num(this.columns),
          'ui',
          'statistics',
          this.horizontal && 'horizontal',
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
