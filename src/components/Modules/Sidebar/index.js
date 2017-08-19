import Vue from 'vue';
import { Enum } from '../../../PropTypes';
import Pushable from './Pushable';
import Pusher from './Pusher';

const Sidebar = Vue.component('Sidebar', {
  props: {
    animation: Enum(['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along']),
    as: Object,
    class: String,
    direction: Enum(['top', 'right', 'bottom', 'left'], { default: 'left' }),
    visible: Boolean,
    width: Enum(['very thin', 'thin', 'wide', 'very wide']),
  },
  render(createElement) {
    return createElement(this.as || 'div', {
      class: `${this.class || ''} ui sidebar vertical menu ${this.direction} ${this.visible ? 'visible' : ''}`,
    });
  },
});

Sidebar.Pushable = Pushable;
Sidebar.Pusher = Pusher;

export default Sidebar;
