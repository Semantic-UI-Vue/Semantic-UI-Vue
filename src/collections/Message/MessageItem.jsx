import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiMessageItem',
  mixins: [SemanticUIVueMixin],
  render() {
    const ElementType = this.getElementType('li');
    return (
      <ElementType {...this.getChildPropsAndListeners()}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMessage',
  },
};
