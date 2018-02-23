import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiFormField',
  mixins: [listenersMixin],
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('field')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiForm',
  },
};
