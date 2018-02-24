import { num, classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiFormField',
  mixins: [listenersMixin],
  props: {
    width: Enum.Number({
      description: 'A field can specify its width in grid columns',
    }),
    inline: {
      type: Boolean,
      description: 'A field can have its label next to instead of above it.',
    },
    required: {
      type: Boolean,
      description: 'A field can show that input is mandatory.',
    },
    disabled: {
      type: Boolean,
      description: 'Individual fields may be disabled.',
    },
    error: {
      type: Boolean,
      description: 'Individual fields may display an error state.',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
        class={classes(
          num(this.width),
          this.inline && 'inline',
          this.required && 'required',
          this.disabled && 'disabled',
          'field',
          this.error && 'error',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiForm',
  },
};
