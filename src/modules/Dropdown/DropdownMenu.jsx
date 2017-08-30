import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiDropdownMenu',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class={classes('menu', 'transition')}>
        {this.$slots.default}
      </ElementType>
    );
  },
};
