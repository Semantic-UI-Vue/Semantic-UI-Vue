import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiFormGroup',
  props: {
    inline: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(this.inline && 'inline', 'fields')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiForm',
  },
};
