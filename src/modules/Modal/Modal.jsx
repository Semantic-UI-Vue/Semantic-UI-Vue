/**
 * Code taken form https://github.com/David-Desmaisons/Vue-Semantic-Modal
 * Thanks to [David Desmaisons](https://github.com/David-Desmaisons)
 */
import { classes, getEventAnimationEnd, listenersMixin } from '../../lib';

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
  mixins: [listenersMixin],
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
    closable: {
      type: Boolean,
      default: true,
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
    this.$el.addEventListener(getEventAnimationEnd(), this.onAnimationEnded, false);
  },
  beforeDestroy() {
    this.$el.removeEventListener(getEventAnimationEnd(), this.onAnimationEnded, false);
  },
  methods: {
    toggle(value) {
      this.$emit(changed, value);
    },
    dimmerClick(event) {
      if (this.closable && event.target === event.currentTarget && this.visualState === open) {
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

    return (
      <div
        class={classes('ui dimmer modals page modal-component', this.dimmerClass)}
        style={containerStyle} onClick={this.dimmerClick}
      >
        <div class={classes('ui modal', this.modalClass)} style={contentStyle}>
          {this.closeIcon && <i class="close icon" onClick={() => this.toggle(false)}/>}

          {this.$slots.default}
        </div>
      </div>
    );
  },
};
