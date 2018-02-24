import { classes, getChildProps, getElementType, listenersMixin, classMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiStatistic',
  mixins: [classMixin, listenersMixin],
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
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
        class={classes(
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
