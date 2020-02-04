import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiSidebar',
  mixins: [SemanticUIVueMixin],
  props: {
    animation: Enum([
      'overlay',
      'push',
      'scale down',
      'uncover',
      'slide out',
      'slide along',
    ]),
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
    const ElementType = this.getElementType();

    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={`ui sidebar ${this.direction} ${this.width} ${this.animation ||
          ''}${this.visible ? ' visible' : ''}${
          this.animating ? ' animating' : ''
        }`}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
