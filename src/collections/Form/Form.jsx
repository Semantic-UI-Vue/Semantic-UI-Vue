import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiForm',
  props: {
    size: Enum.Size({
      description: 'A form can vary in size.',
    }),
    loading: {
      type: Boolean,
      description: 'If a form is in loading state, it will automatically show a loading indicator.',
    },
    success: {
      type: Boolean,
      description: 'Automatically show any success Message children.',
    },
    warning: {
      type: Boolean,
      description: 'Automatically show any warning Message children.',
    },
    error: {
      type: Boolean,
      description: 'Automatically show any error Message children.',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.size,
          this.loading && 'loading',
          'form',
          this.success && 'success',
          this.warning && 'warning',
          this.error && 'error',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
