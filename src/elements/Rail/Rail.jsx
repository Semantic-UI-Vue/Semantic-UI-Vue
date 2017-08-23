import { classes, getChildProps, getElementType } from 'src/lib';
import { Enum } from 'src/lib/PropTypes';

export default {
  name: 'SuiRail',
  props: {
    dividing: Boolean,
    position: Enum(['left', 'right']),
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('ui', this.dividing && 'dividing', this.position, 'rail')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
