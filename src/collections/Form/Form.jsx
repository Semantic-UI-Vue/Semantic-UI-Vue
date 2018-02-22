import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiForm',
  props: {
    size: Enum.Size({
      description: 'A form can vary in size.',
    }),
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.size,
          'form',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
