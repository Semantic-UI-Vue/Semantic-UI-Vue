import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiSegment',
  mixins: [listenersMixin],
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
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
        class={classes(
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
