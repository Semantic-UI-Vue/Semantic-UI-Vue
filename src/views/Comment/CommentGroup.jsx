import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiCommentGroup',
  mixins: [listenersMixin],
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          'comments',
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
