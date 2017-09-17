import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiCommentAvatar',
  props: {
    src: String,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'avatar',
        )}
      >
        <img src={this.src} />
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiComment',
  },
};
