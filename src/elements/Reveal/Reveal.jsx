import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiReveal',
  mixins: [listenersMixin],
  props: {
    animated: Enum([
      'fade',
      'small fade',
      'move',
      'move right',
      'move up',
      'move down',
      'rotate',
      'rotate left',
    ]),
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
        class={classes(
          'ui',
          this.animated,
          'reveal',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
