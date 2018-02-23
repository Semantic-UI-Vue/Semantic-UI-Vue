import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiForm',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('ui', 'form')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
