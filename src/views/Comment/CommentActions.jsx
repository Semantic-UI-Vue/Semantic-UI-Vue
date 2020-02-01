import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiCommentActions',
  mixins: [SemanticUIVueMixin],
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('actions')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiComment',
  },
};
