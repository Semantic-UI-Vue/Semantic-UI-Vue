import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiCommentAuthor',
  mixins: [SemanticUIVueMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('author')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiComment',
  },
};
