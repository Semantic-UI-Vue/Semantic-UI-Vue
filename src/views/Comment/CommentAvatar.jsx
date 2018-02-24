import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiCommentAvatar',
  mixins: [listenersMixin],
  props: {
    src: String,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
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
