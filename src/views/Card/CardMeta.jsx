import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiCardMeta',
  mixins: [listenersMixin],
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
        class={classes('meta')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiCard',
  },
};
