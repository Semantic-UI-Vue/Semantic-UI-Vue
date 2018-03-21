import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiLoader',
  mixins: [SemanticUIVueMixin],
  props: {
    active: Boolean,
    content: String,
    indeterminate: Boolean,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.indeterminate && 'indeterminate',
          this.active && 'active',
          (this.content || this.$slots.default) && 'text',
          'loader',
        )}
      >
        {this.content || this.$slots.default}
      </ElementType>
    );
  },
};
