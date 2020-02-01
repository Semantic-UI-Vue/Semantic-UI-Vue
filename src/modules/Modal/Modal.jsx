/**
 * Code taken form https://github.com/David-Desmaisons/Vue-Semantic-Modal
 * Thanks to [David Desmaisons](https://github.com/David-Desmaisons)
 */
import { getEventAnimationEnd, SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import Icon from '../../elements/Icon/Icon';

const visualStates = {
  closed: 'closed',
  opening: 'opening',
  open: 'open',
  closing: 'closing',
};

const changedEvent = 'changed';

function animationWithDirections(animation) {
  return [
    `${animation} up`,
    `${animation} down`,
    `${animation} left`,
    `${animation} right`,
  ];
}

const animations = [
  'scale',
  'drop',
  'horizontal flip',
  'vertical flip',
  'fade',
  ...animationWithDirections('fade'),
  ...animationWithDirections('fly'),
  ...animationWithDirections('swing'),
];

function buildAnimation(name, direction) {
  return `animating ${name} ${direction ? 'in' : 'out'}`;
}

function buildClass(visualState, animation) {
  switch (visualState) {
    case visualStates.opening:
      return buildAnimation(animation, true);
    case visualStates.open:
      return 'visible active';
    case visualStates.closing:
      return `visible active ${buildAnimation(animation, false)}`;
    case visualStates.close:
      return 'hidden';
    default:
      return '';
  }
}

export default {
  name: 'SuiModal',
  model: {
    prop: 'open',
    event: changedEvent,
  },
  mixins: [SemanticUIVueMixin],
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
    dimmer: Enum(['inverted']),
    image: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
    size: Enum(['standard', 'fullscreen', 'small', 'large', 'mini', 'tiny'], {
      default: 'standard',
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
      return buildClass(this.visualState, 'fade');
    },
    modalClass() {
      return buildClass(this.visualState, this.animation);
    },
    visible() {
      return this.visualState !== visualStates.closed;
    },
    dimmerStyle() {
      return {
        display: this.visible ? 'flex !important' : 'none !important',
        animationDuration: `${this.animationDuration}ms`,
      };
    },
    modalStyle() {
      return {
        display: this.visible ? 'block !important' : 'none !important',
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
    this.$el.addEventListener(
      getEventAnimationEnd(),
      this.onAnimationEnd,
      true,
    );
  },
  beforeDestroy() {
    this.$el.removeEventListener(
      getEventAnimationEnd(),
      this.onAnimationEnd,
      true,
    );
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
    return (
      <div
        ref="dimmer"
        class={this.classes(
          'ui',
          this.dimmer,
          'dimmer modals page transition',
          this.dimmerClass,
        )}
        style={this.dimmerStyle}
        onClick={this.dimmerClick}
      >
        <div
          ref="modal"
          style={this.modalStyle}
          class={this.classes(
            'ui',
            this.size,
            this.basic && 'basic',
            this.aligned && `${this.aligned} aligned`,
            'modal',
            'transition',
            this.modalClass,
          )}
        >
          {this.closeIcon && (
            <Icon name="close" nativeOnClick={() => this.close()} />
          )}
          {this.$slots.default}
        </div>
      </div>
    );
  },
};
