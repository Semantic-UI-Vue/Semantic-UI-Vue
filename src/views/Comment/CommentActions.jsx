import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiCommentActions',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'actions',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiComment',
  },
};
