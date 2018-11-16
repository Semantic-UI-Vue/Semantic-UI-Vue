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
    padded: Enum.Padded({
      type: Boolean,
      description: 'A segment can increase its padding',
    }),
    piled: Boolean,
    raised: Boolean,
    stacked: Enum(['tall'], {
      type: Boolean,
    }),
    vertical: Boolean,
    disabled: Boolean,
    loading: Boolean,
    compact: Boolean,
    color: Enum.Color({
      type: String,
    }),
    emphasis: Enum.Emphasis({
      type: String,
    }),
    circular: Boolean,
    floated: Enum.Floated({
      type: String,
    }),
    aligned: Enum.TextAlign({
      type: String,
    }),
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.attached,
          this.attached && 'attached',
          this.basic && 'basic',
          this.clearing && 'clearing',
          this.padded,
          this.padded && 'padded',
          this.inverted && 'inverted',
          this.stacked,
          this.stacked && 'stacked',
          this.piled && 'piled',
          this.raised && 'raised',
          this.vertical && 'vertical',
          this.disabled && 'disabled',
          this.loading && 'loading',
          this.compact && 'compact',
          this.color,
          this.emphasis,
          this.circular && 'circular',
          this.floated,
          this.floated && 'floated',
          this.aligned,
          this.aligned && 'aligned',
          'segment',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
