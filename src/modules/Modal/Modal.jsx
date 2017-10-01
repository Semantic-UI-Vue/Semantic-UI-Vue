/**
* Code taken form https://github.com/David-Desmaisons/Vue-Semantic-Modal
* Thanks to [David Desmaisons](https://github.com/David-Desmaisons)
*/
import { directive as onClickaway } from 'vue-clickaway';
import { classes } from '../../lib';
import { eventAnimationEnd } from './animationHelper';

const closed = 'closed';
const opening = 'opening';
const open = 'open';
const closing = 'closing';
const changed = 'changed';

function addClass(initial, name) {
  return name === '' ? initial : `${initial} ${name}`;
}

function withDirections(animation) {
  return [`${animation} up`, `${animation} down`, `${animation} left`, `${animation} right`];
}

const dimmerVariations = ['', 'inverted'];
const modalVariations = ['', 'fullscreen', 'basic', 'small', 'large', 'mini', 'tiny'];
const animations = [
  'scale', 'drop', 'horizontal flip', 'vertical flip', 'fade',
  ...withDirections('fade'), ...withDirections('fly'), ...withDirections('swing'),
];

function buildAnimation(name, direction) {
  return `transition animating ${name} ${direction ? 'in' : 'out'} visible`;
}

function classBuilder(visualState, animation) {
  switch (visualState) {
    case opening:
      return `${buildAnimation(animation, true)} active`;

    case open:
      return 'visible active';

    case closing:
      return buildAnimation(animation, false);

    default:
      return '';
  }
}

export default {
  name: 'SuiModal',
  model: {
    prop: 'open',
    event: changed,
  },
  directives: { onClickaway },
  props: {
    animation: {
      type: String,
      default: 'scale',
      validator(value) {
        return animations.indexOf(value) !== -1;
      },
    },
    animationDuration: {
      type: Number,
      default: 500,
    },
    closeIcon: {
      type: Boolean,
      default: false,
    },
    dimmer: {
      type: String,
      default: '',
      validator(value) {
        return dimmerVariations.indexOf(value) !== -1;
      },
    },
    image: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
      validator(value) {
        return modalVariations.indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      offsetY: 0,
      visualState: this.open ? open : closed,
      hidden: true,
      loading: true,
    };
  },
  computed: {
    dimmerClass() {
      return addClass(classBuilder(this.visualState, 'fade'), this.dimmer);
    },

    modalClass() {
      return addClass(classBuilder(this.visualState, this.animation), this.size);
    },

    visibility() {
      return this.loading ? 'hidden' : 'visible';
    },

    display() {
      return (this.loading || this.open) ? 'block' : 'none';
    },
  },
  watch: {
    open(newValue) {
      if (newValue) {
        requestAnimationFrame(() => {
          this.updatePosition();
        });
      }
      this.visualState = newValue ? opening : closing;
    },
    visualState(newValue) {
      this.$emit('displayChanged', newValue);
    },
  },
  mounted() {
    const modal = this.$el.querySelector('.ui.modal');
    this.modal = modal;
    this.updatePosition();
    this.loading = false;
    this.$el.addEventListener(eventAnimationEnd, this.onAnimationEnded, false);
  },
  beforeDestroy() {
    this.$el.removeEventListener(eventAnimationEnd, this.onAnimationEnded, false);
  },
  methods: {
    toggle(value) {
      this.$emit(changed, value);
    },
    clickAway() {
      if (this.visualState === open) {
        this.$emit('clickAwayModal');
        this.toggle(false);
      }
    },
    onAnimationEnded() {
      this.visualState = this.open ? open : closed;
    },
    updatePosition() {
      this.offsetY = -this.modal.clientHeight / 2;
    },
  },
  render() {
    const containerStyle = {
      visibility: this.visibility,
      display: this.display,
      animationDuration: `${this.animationDuration}ms`,
    };

    const contentStyle = {
      marginTop: `${this.offsetY}px`,
      visibility: this.visibility,
      display: this.display,
      animationDuration: `${this.animationDuration}ms`,
    };

    const clickAway = {
      directives: [
        { name: 'on-clickaway', value: this.clickAway },
      ],
    };

    return (
      <div
        class={classes('ui dimmer modals page modal-component', this.dimmerClass)}
        style={containerStyle}
      >
        <div class={classes('ui modal', this.modalClass)} style={contentStyle} {...clickAway}>
          {this.closeIcon && <i class="close icon" onClick={() => this.toggle(false)} />}

          {this.$slots.default}
        </div>
      </div>
    );
  },
};
