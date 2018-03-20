import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiModalContent',
  mixins: [SemanticUIVueMixin],
  props: {
    image: Boolean,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('content', this.image && 'image')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiModal',
  },
};
