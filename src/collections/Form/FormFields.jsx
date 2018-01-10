import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiFormFields',
  props: {
    inline: Boolean,
    grouped: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(this.inline && 'inline', this.grouped && 'grouped', 'fields')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiForm',
  },
};
