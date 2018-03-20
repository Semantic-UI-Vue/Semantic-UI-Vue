import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiSegment',
  mixins: [SemanticUIVueMixin],
  props: {
    attached: Boolean,
    basic: Boolean,
    inverted: Boolean,
    padded: Boolean,
    piled: Boolean,
    raised: Boolean,
    stacked: Enum(['tall'], {
      type: Boolean,
    }),
    vertical: Boolean,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.attached && 'attached',
          this.basic && 'basic',
          this.padded && 'padded',
          this.inverted && 'inverted',
          this.stacked, this.stacked && 'stacked',
          this.piled && 'piled',
          this.raised && 'raised',
          this.vertical && 'vertical',
          'segment',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
