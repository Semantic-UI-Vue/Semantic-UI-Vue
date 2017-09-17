import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiCommentAuthor',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'author',
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
