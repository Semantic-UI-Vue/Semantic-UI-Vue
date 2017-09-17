import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiLabel',
  props: {
    basic: {
      type: Boolean,
      description: 'A label can reduce its complexity.',
    },
    color: Enum.Color,
    image: Boolean,
    pointing: Enum(['left', 'right']),
    ribbon: Boolean,
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
          this.image && 'image',
          this.ribbon && 'ribbon',
          'label',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
