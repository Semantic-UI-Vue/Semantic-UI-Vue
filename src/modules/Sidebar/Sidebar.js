import Vue from 'vue';
import { Enum } from 'src/lib/PropTypes';

export default Vue.component('Sidebar', {
  props: {
    animation: Enum(['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along']),
    as: Object,
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
  render(createElement) {
    return createElement(this.as || 'div', {
      class: `ui sidebar vertical menu ${this.direction} ${this.animation}${this.visible ? ' visible' : ''}${this.animating ? ' animating' : ''}`,
    });
  },
});
