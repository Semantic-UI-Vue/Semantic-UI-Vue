import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiMenuMenu',
  props: {
    position: Enum(['left', 'right']),
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class={classes(this.position, 'menu')}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMenu',
  },
};
