import { Enum } from 'src/lib/PropTypes';

export default {
  name: 'sui-sidebar',
  props: {
    animation: Enum(['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along']),
    as: {
      type: Object,
      default: 'div',
    },
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
  render(h) {
    return h(this.as, {
      class: `ui sidebar vertical menu ${this.direction} ${this.animation}${this.visible ? ' visible' : ''}${this.animating ? ' animating' : ''}`,
    });
  },
};
