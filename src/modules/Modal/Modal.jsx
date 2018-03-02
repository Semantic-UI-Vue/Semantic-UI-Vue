/**
 * Code taken form https://github.com/David-Desmaisons/Vue-Semantic-Modal
 * Thanks to [David Desmaisons](https://github.com/David-Desmaisons)
 */
import { classes, getEventAnimationEnd, listenersMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

const visualStates = {
  closed: 'closed',
  opening: 'opening',
  open: 'open',
  closing: 'closing',
};

const changedEvent = 'changed';

function animationWithDirections(animation) {
  return [`${animation} up`, `${animation} down`, `${animation} left`, `${animation} right`];
}

const animations = [
  'scale', 'drop', 'horizontal flip', 'vertical flip', 'fade',
  ...animationWithDirections('fade'), ...animationWithDirections('fly'), ...animationWithDirections('swing'),
];

function buildAnimation(name, direction) {
  return `animating ${name} ${direction ? 'in' : 'out'}`;
}

export default {
  name: 'SuiModal',
  model: {
    prop: 'open',
    event: changedEvent,
  },
  mixins: [listenersMixin],
  props: {
    animation: Enum(animations, {
      default: animations[0],
    }),
    animationDuration: {
      type: Number,
      default: 500,
    },
    aligned: Enum(['top']),
    closeIcon: {
      type: Boolean,
      default: false,
    },
    dimmer: Enum(['inverted'], {
      type: Boolean,
      default: true,
    }),
    image: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
    size: Enum(['standart', 'fullscreen', 'small', 'large', 'mini', 'tiny'], {
      default: 'standart',
    }),
    basic: {
      type: Boolean,
    },
    closable: {
      type: Boolean,
      default: true,
    },
  },
  events: {
    displayChanged: {
      custom: true,
    },
    [changedEvent]: {
      custom: true,
    },
    clickAwayModal: {
      custom: true,
    },
  },
  data() {
    return {
      visualState: this.open ? visualStates.open : visualStates.closed,
    };
  },
  computed: {
    dimmerClass() {
      switch (this.visualState) {
        case visualStates.opening:
          return buildAnimation('fade', true);
        case visualStates.open:
          return 'visible active';
        case visualStates.closing:
          return `visible active ${buildAnimation('fade', false)}`;
        case visualStates.close:
          return 'hidden';
        default:
          return '';
      }
    },
    modalClass() {
      switch (this.visualState) {
        case visualStates.opening:
          return buildAnimation(this.animation, true);
        case visualStates.open:
          return 'visible active';
        case visualStates.closing:
          return `visible ${buildAnimation(this.animation, false)}`;
        case visualStates.close:
          return 'hidden';
        default:
          return '';
      }
    },
    visible() {
      return this.visualState !== visualStates.closed;
    },
    dimmerStyle() {
      return {
        display: this.visible ? 'flex !important' : 'none',
        animationDuration: `${this.animationDuration}ms`,
      };
    },
    modalStyle() {
      return {
        display: this.visible ? 'block !important' : 'none',
        animationDuration: `${this.animationDuration}ms`,
      };
    },
  },
  watch: {
    open(newValue) {
      this.visualState = newValue ? visualStates.opening : visualStates.closing;
    },
    visualState(newValue) {
      this.$emit('displayChanged', newValue);
    },
  },
  mounted() {
    this.$el.addEventListener(getEventAnimationEnd(), this.onAnimationEnd, true);
  },
  beforeDestroy() {
    this.$el.removeEventListener(getEventAnimationEnd(), this.onAnimationEnd, true);
  },
  methods: {
    close() {
      this.$emit(changedEvent, false);
    },
    dimmerClick(event) {
      if (
        this.closable &&
        event.target === event.currentTarget &&
        this.visualState === visualStates.open
      ) {
        this.$emit('clickAwayModal');
        this.close();
      }
    },
    onAnimationEnd() {
      this.visualState = this.open ? visualStates.open : visualStates.closed;
    },
  },
  render() {
    const modal = (
      <div
        ref="modal"
        style={this.modalStyle}
        class={
          classes(
            'ui',
            this.size,
            this.aligned && `${this.aligned} aligned`,
            'modal',
            'transition',
            this.modalClass,
          )
        }
      >
        {this.closeIcon && <i class="close icon" onClick={() => this.close()} />}
        {this.$slots.default}
      </div>
    );

    if (!this.dimmer) {
      return modal;
    }

    return (
      <div
        ref="dimmer"
        class={classes('ui dimmer modals page transition', this.dimmerClass)}
        style={this.dimmerStyle} onClick={this.dimmerClick}
      >
        {modal}
      </div>
    );
  },
};
