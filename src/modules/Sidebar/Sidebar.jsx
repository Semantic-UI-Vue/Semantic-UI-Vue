import { getElementType, getChildProps } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiSidebar',
  props: {
    animation: Enum(['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along']),
    direction: Enum(['top', 'right', 'bottom', 'left'], { default: 'left' }),
    visible: Boolean,
    width: Enum(['very thin', 'thin', 'wide', 'very wide']),
  },
  data() {
    return {
      animating: false,
    };
  },
  watch: {
    visible() {
      this.animating = true;
      setTimeout(() => {
        this.animating = false;
      }, 500);
    },
  },
  render() {
    const ElementType = getElementType(this);

    return (
      <ElementType
        {...getChildProps(this)}
        class={`ui sidebar vertical menu ${this.direction} ${this.animation || ''}${this.visible ? ' visible' : ''}${this.animating ? ' animating' : ''}`}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
