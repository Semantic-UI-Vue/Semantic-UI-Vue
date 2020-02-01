import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiCard',
  mixins: [SemanticUIVueMixin],
  props: {},
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('ui', 'card')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
