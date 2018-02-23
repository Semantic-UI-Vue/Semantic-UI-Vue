import { getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiMessageItem',
  mixins: [listenersMixin],
  render() {
    const ElementType = getElementType(this, 'li');
    return (
      <ElementType {...getChildProps(this)}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMessage',
  },
};
