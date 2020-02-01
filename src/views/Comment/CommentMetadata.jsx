import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiCommentMetadata',
  mixins: [SemanticUIVueMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('metadata')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiComment',
  },
};
