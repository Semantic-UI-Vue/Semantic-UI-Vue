import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiFeed',
  props: {
    size: Enum.Size
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          'feed',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
