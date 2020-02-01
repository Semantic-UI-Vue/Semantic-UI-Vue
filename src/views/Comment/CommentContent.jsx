import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiCommentContent',
  mixins: [SemanticUIVueMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('content')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiComment',
  },
};
