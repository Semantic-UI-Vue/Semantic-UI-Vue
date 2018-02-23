import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiMessageContent',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class={classes('content')}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMessage',
  },
};
