import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiCommentAction',
  mixins: [SemanticUIVueMixin],
  render() {
    const ElementType = this.getElementType('a');
    return (
      <ElementType {...this.getChildPropsAndListeners()}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiComment',
  },
};
