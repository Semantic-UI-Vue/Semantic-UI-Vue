import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiSegments',
  mixins: [SemanticUIVueMixin],
  props: {
    piled: Boolean,
    raised: Boolean,
    stacked: Enum(['tall'], {
      type: Boolean,
    }),
    horizontal: Boolean,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.piled && 'piled',
          this.raised && 'raised',
          this.stacked, this.stacked && 'stacked',
          this.horizontal && 'horizontal',
          'segments',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
