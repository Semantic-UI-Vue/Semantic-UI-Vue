/**
* Code taken form https://github.com/David-Desmaisons/Vue-Semantic-Modal
* Thanks to [David Desmaisons](https://github.com/David-Desmaisons)
*/
import { directive as onClickaway } from 'vue-clickaway';
import { classes } from '../../lib';
import { eventAnimationEnd } from './animationHelper';

const closed = 'closed';
const opening = 'opening';
const opened = 'opened';
const closing = 'closing';
const changed = 'changed';

function addClass(initial, name) {
  return name === '' ? initial : `${initial} ${name}`;
}

function withDirections(animation) {
  return [`${animation} up`, `${animation} down`, `${animation} left`, `${animation} right`];
}

const dimmerVariations = ['', 'inverted'];
const modalVariations = ['', 'fullscreen', 'basic', 'small', 'large'];
const modalTransitions = [
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

    case opened:
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
    prop: 'opened',
    event: changed,
  },
  directives: { onClickaway },
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
    hasImage: {
      type: Boolean,
      default: false,
    },
    animationDuration: {
      type: Number,
      default: 500,
    },
    showCloseIcon: {
      type: Boolean,
      default: false,
    },
    dimmerVariation: {
      type: String,
      default: '',
      validator(value) {
        return dimmerVariations.indexOf(value) !== -1;
      },
    },
    modalVariation: {
      type: String,
      default: '',
      validator(value) {
        return modalVariations.indexOf(value) !== -1;
      },
    },
    modalTransition: {
      type: String,
      default: 'scale',
      validator(value) {
        return modalTransitions.indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      offsetY: 0,
      visualState: closed,
      hidden: true,
      loading: true,
    };
  },
  computed: {
    dimmerClass() {
      return addClass(classBuilder(this.visualState, 'fade'), this.dimmerVariation);
    },

    modalClass() {
      return addClass(classBuilder(this.visualState, this.modalTransition), this.modalVariation);
    },

    visibility() {
      return this.loading ? 'hidden' : 'visible';
    },

    display() {
      return (this.loading || this.opened) ? 'block' : 'none';
    },
  },
  watch: {
    opened(newValue) {
      this.visualState = newValue ? opening : closing;
    },
    visualState(newValue) {
      this.$emit('displayChanged', newValue);
    },
  },
  mounted() {
    const modal = this.$el.querySelector('.ui.modal');
    this.modal = modal;
    this.offsetY = -modal.clientHeight / 2;
    this.loading = false;
    this.$el.addEventListener(eventAnimationEnd, this.onAnimationEnded, false);
  },
  beforeDestroy() {
    this.$el.removeEventListener(eventAnimationEnd, this.onAnimationEnded, false);
  },
  methods: {
    close() {
      this.$emit(changed, false);
    },
    open() {
      this.$emit(changed, true);
    },
    clickAway() {
      if (this.visualState === opened) {
        this.$emit('clickAwayModal');
      }
    },
    onAnimationEnded() {
      this.visualState = this.opened ? opened : closed;
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
        style={containerStyle}
      >
        <div
          class={classes('ui modal', this.modalClass)}
          onClickaway={this.clickAway}
          style={contentStyle}
        >
          {this.showCloseIcon && <i class="close icon" onClick={this.close} />}

          <div class="header">
            <slot name="header">
              header
            </slot>
          </div>

          <div class={classes('content', this.hasImage && 'image')}>
            <slot name="content">
              <p>Content</p>
            </slot>
          </div>

          <div class="actions">
            <slot name="actions">
              <div class="ui positive right button" onClick="close">
                OK
              </div>
            </slot>
          </div>
        </div>
      </div>
    );
  },
};
