import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiCommentMetadata',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'metadata',
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
