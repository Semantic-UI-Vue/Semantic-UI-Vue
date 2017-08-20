import Vue from 'vue';
import { getChildProps } from 'src/lib';
import { ElType, Enum } from 'src/lib/PropTypes';

export default {
  name: 'SuiSidebar',
  props: {
    animation: Enum(['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along']),
    as: ElType(),
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
    const V = Vue; // eslint-disable-line

    return (
      <this.as
        {...getChildProps(this)}
        class={`ui sidebar vertical menu ${this.direction} ${this.animation || ''}${this.visible ? ' visible' : ''}${this.animating ? ' animating' : ''}`}
      >
        {this.$slots.default}
      </this.as>
    );
  },
};
