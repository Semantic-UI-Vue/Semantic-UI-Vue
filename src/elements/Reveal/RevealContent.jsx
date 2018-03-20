import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiRevealContent',
  mixins: [SemanticUIVueMixin],
  props: {
    visible: Boolean,
    hidden: Boolean,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.hidden && 'hidden',
          this.visible && 'visible',
          'content',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiReveal',
  },
};
