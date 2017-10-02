import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiStatistic',
  props: {
    horizontal: {
      type: Boolean,
      description: 'Present measurement horizontally',
    },
    color: Enum.Color,
    size: Enum.Size,
    floated: Enum(['left', 'right']),
    inverted: {
      type: Boolean,
      description: 'Should the colors be inverted',
    },
    inGroup: {
      type: Boolean,
      description: 'For now manual override, when used inside Statistic Group, to avoid adding extra ui class',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          !this.inGroup && 'ui',
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
