import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiMessageContent',
  mixins: [listenersMixin],
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} {...this.generateListeners()} class={classes('content')}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMessage',
  },
};
