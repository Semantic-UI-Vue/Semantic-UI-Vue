import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiContainer',
  props: {
    fluid: {
      type: Boolean,
      description: 'Container has no maximum width.',
    },
    text: {
      type: Boolean,
      description: 'Reduce maximum width to more naturally accommodate text.',
    },
    textAlign: Enum(['left', 'right', 'center', 'justified'], {
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
          this.textAlign,
          this.textAlign && this.textAlign !== 'justified' && 'aligned',
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
