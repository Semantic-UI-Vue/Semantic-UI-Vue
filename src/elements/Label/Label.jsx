import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiLabel',
  props: {
    pointing: Enum(['left', 'right']),
    color: Enum.color,
    basic: {
      type: Boolean,
      description: 'A label can reduce its complexity.',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.color,
          this.pointing && `${this.pointing} pointing`,
          this.basic && 'basic',
          'label',
        )}
      >
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
};
