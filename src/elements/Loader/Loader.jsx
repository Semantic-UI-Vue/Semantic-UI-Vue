import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiLoader',
  mixins: [SemanticUIVueMixin],
  props: {
    active: Boolean,
    content: String,
    indeterminate: Boolean,
    disabled: Boolean,
    inline: Boolean,
    centered: Boolean,
    size: Enum.Size({
      type: String,
    }),
    inverted: Boolean,
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
          this.disabled && 'disabled',
          this.inline && 'inline',
          this.centered && 'centered',
          this.inverted && 'inverted',
          this.size,
          (this.content || this.$slots.default) && 'text',
          'loader',
        )}
      >
        {this.content || this.$slots.default}
      </ElementType>
    );
  },
};
