import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiMessageHeader',
  mixins: [listenersMixin],
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
