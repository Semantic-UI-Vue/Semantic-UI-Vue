import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiMessageList',
  mixins: [listenersMixin],
  render() {
    const ElementType = getElementType(this, 'ul');
    return (
      <ElementType {...getChildProps(this)} {...this.generateListeners()} class={classes('list')}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMessage',
  },
};
