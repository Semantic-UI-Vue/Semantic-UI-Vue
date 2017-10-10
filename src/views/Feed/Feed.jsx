import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiFeed',
  props: {
    size: Enum(['small', 'large'], {
      description: 'A feed can have different sizes (small | large)'
    })
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.size,
          'feed',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
