import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiStatisticsGroup',
  mixins: [SemanticUIVueMixin],
  props: {
    horizontal: Boolean,
    columns: Enum.Number(),
  },
  render() {
    const ElementType = this.getElementType();

    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          this.num(this.columns),
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
