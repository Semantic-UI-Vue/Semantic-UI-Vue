import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiMessageHeader',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class={classes('header')}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMessage',
  },
};
