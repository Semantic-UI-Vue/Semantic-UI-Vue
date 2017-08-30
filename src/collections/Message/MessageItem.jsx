import { getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiMessageItem',
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
