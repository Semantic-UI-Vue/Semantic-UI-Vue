import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiMenuMenu',
  mixins: [listenersMixin],
  props: {
    position: Enum(['left', 'right'], {
      description: 'A sub menu can take left or right position',
    }),
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} {...this.generateListeners()} class={classes(this.position, 'menu')}>
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiMenu',
  },
};
