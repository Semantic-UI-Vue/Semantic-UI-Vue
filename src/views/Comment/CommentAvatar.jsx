import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiCommentAvatar',
  mixins: [SemanticUIVueMixin],
  props: {
    src: String,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('avatar')}
      >
        <img src={this.src} />
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiComment',
  },
};
