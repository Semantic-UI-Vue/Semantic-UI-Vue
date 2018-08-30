import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiSegment',
  mixins: [SemanticUIVueMixin],
  props: {
    attached: Enum.Attached({
      type: Boolean,
      description: 'Attach segment to other content, like a header.',
    }),
    basic: Boolean,
    clearing: {
      type: Boolean,
      description: 'A segment can clear floated content.',
    },
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
          this.clearing && 'clearing',
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
