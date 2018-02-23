import { num, classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiFormFields',
  props: {
    inline: {
      type: Boolean,
      description: 'Multiple fields may be inline in a row.',
    },
    grouped: {
      type: Boolean,
      description: 'Fields can show related choices.',
    },
    fields: Enum.Number({
      choices: ['equal'],
      description: 'Represents number of fields in group',
    }),
    unstackable: {
      type: Boolean,
      description: 'A form group can prevent itself from stacking on mobile.',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          this.unstackable && 'unstackable',
          this.inline && 'inline',
          this.grouped && 'grouped',
          num(this.fields),
          'fields',
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
