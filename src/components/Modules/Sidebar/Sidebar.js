import Vue from 'vue';
import { Enum } from '@/lib/PropTypes';

export default Vue.component('Sidebar', {
  props: {
    animation: Enum(['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along']),
    as: Object,
    direction: Enum(['top', 'right', 'bottom', 'left'], { default: 'left' }),
    visible: Boolean,
    width: Enum(['very thin', 'thin', 'wide', 'very wide']),
  },
  render(createElement) {
    return createElement(this.as || 'div', {
      class: `ui sidebar vertical menu ${this.direction} ${this.visible ? 'visible' : ''}`,
    });
  },
});
