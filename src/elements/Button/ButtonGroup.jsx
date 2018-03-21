import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiButtonGroup',
  mixins: [SemanticUIVueMixin],
  props: {
    attached: Enum(['top', 'bottom']),
    widths: Enum.Number(),
    vertical: Boolean,
    labeled: Boolean,
    icons: Boolean,
    color: Enum.Color(),
    basic: Boolean,
    size: Enum.Size(),
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.size,
          this.color,
          this.attached,
          this.attached && 'attached',
          this.num(this.widths),
          this.vertical && 'vertical',
          this.labeled && 'labeled',
          this.icons && 'icon',
          this.basic && 'basic',
          'buttons',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiButton',
  },
};
