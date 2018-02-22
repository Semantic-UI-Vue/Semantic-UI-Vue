import { num, classes, getChildProps, getElementType } from '../../lib';

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
    fields: {
      type: Number,
      description: 'Represents number of fields in group',
    },
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
          num(this.fields),
          this.inline && 'inline',
          this.grouped && 'grouped',
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
