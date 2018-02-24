import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiForm',
  mixins: [listenersMixin],
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
    state: Enum(['success', 'warning', 'error'], {
      description: 'You can set the state of form using one variable',
    }),
    inverted: {
      type: Boolean,
      description: 'A form can have its color inverted for contrast.',
    },
    equalWidth: {
      type: Boolean,
      description: 'Forms can automatically divide fields to be equal width.',
    },
    unstackable: {
      type: Boolean,
      description: 'A form can prevent itself from stacking on mobile.',
    },
  },
  render() {
    const ElementType = getElementType(this, 'form');
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
        class={classes(
          'ui',
          this.unstackable && 'unstackable',
          this.equalWidth && 'equal width',
          this.inverted && 'inverted',
          this.size,
          this.loading && 'loading',
          'form',
          this.success && 'success',
          this.warning && 'warning',
          this.error && 'error',
          this.state,
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
