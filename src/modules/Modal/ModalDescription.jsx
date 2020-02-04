import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiModalDescription',
  mixins: [SemanticUIVueMixin],
  props: {},
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('description')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiModal',
  },
};
