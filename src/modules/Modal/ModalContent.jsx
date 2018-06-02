import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiModalContent',
  mixins: [SemanticUIVueMixin],
  props: {
    image: Boolean,
    scrolling: {
      type: Boolean,
      default: false,
      description: 'A modal can use the entire size of the screen.',
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'content',
          this.image && 'image',
          this.scrolling && 'scrolling',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiModal',
  },
};
