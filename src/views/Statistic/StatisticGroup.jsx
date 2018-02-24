import { classes, getChildProps, getElementType, listenersMixin, num } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiStatisticsGroup',
  mixins: [listenersMixin],
  props: {
    horizontal: Boolean,
    columns: Enum.Number(),
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
