import { SemanticUIVueMixin, classMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiStatistic',
  mixins: [classMixin, SemanticUIVueMixin],
  props: {
    horizontal: {
      type: Boolean,
      description: 'Present measurement horizontally',
    },
    color: Enum.Color(),
    size: Enum.Size(),
    floated: Enum(['left', 'right']),
    inverted: {
      type: Boolean,
      description: 'Should the colors be inverted',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          this.getUIClass(),
          'statistic',
          this.color,
          this.size,
          this.floated && `${this.floated} floated`,
          this.inverted && 'inverted',
          this.horizontal && 'horizontal',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
