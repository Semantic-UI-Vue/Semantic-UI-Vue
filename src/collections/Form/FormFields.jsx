import { num, classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiFormFields',
  props: {
    inline: Boolean,
    grouped: Boolean,
    fields: Number,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
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
