import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiMessageList',
  render() {
    const ElementType = getElementType(this, 'ul');
    return (
      <ElementType {...getChildProps(this)} class={classes('list')}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMessage',
  },
};
