import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiDropdownItem',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} role="option" class={classes('item')}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiDropdown',
  },
};
