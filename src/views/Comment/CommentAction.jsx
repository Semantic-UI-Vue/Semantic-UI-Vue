import { getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiCommentAction',
  mixins: [listenersMixin],
  render() {
    const ElementType = getElementType(this, 'a');
    return (
      <ElementType {...getChildProps(this)}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiComment',
  },
};
