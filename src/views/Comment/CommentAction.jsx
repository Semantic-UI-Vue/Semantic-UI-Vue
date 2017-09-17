import { getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiCommentAction',
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
