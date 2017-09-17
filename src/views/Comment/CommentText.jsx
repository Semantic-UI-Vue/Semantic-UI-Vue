import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiCommentText',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'text',
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
