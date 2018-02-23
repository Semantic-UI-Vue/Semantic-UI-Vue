import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiCommentAuthor',
  mixins: [listenersMixin],
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
