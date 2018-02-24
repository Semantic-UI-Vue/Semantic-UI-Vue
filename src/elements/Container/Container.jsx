import { classes, getChildProps, getElementType, listenersMixin, textAlign } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiContainer',
  mixins: [listenersMixin],
  props: {
    fluid: {
      type: Boolean,
      description: 'Container has no maximum width.',
    },
    text: {
      type: Boolean,
      description: 'Reduce maximum width to more naturally accommodate text.',
    },
    textAlign: Enum.TextAlign({
      description: 'Align container text.',
    }),
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          textAlign(this.textAlign),
          this.text && 'text',
          this.fluid && 'fluid',
          'container',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
