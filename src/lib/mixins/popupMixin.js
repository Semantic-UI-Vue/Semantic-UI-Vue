import { Enum } from '../PropTypes';

const directions = {
  auto: 'auto',
  autoUpward: 'auto-upward',
  upward: 'upward',
  downward: 'downward',
};

const animations = {
  name: 'slide',
  down: 'down',
  up: 'up',
};

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

export default {
  name: 'popupMixin',

  props: {
    direction: Enum(Object.values(directions), {
      default: directions.auto,
      description: 'A dropdown can have a direction to open',
    }),
  },
  data() {
    return {
      directions,
      menuDirection: null,
    };
  },
  computed: {
    downward() {
      if (this.direction !== directions.auto && this.direction !== directions.autoUpward) {
        return this.direction === directions.downward;
      }
      this.calculateMenuDirection();
      if (this.menuDirection === null) {
        return true;
      }

      if (
        (this.menuDirection.below && this.menuDirection.above) ||
        (!this.menuDirection.below && !this.menuDirection.above)
      ) {
        // Dropdown can or cannot fit in either direction favoring specified
        return this.direction === directions.auto;
      } else if (this.menuDirection.below) {
        // Dropdown can fit in context downward
        return true;
      }
      // Dropdown cannot fit below, opening upward
      return false;
    },
    animation() {
      return `${animations.name} ${(this.downward ? animations.down : animations.up)}`;
    },
  },

  methods: {
    calculateMenuDirection() {
      if (typeof window === 'undefined' || !this.menu || !this.menu.$el || !this.open) return;

      this.menu.$el.classList.add('loading');
      this.$el.classList.remove('upward');

      const c = {
        context: {
          offset: { top: 0, left: 0 },
          scrollTop: document.body.scrollTop,
          height: document.body.offsetHeight,
        },
        menu: {
          offset: getOffset(this.menu.$el),
          height: this.menu.$el.offsetHeight,
        },
      };
      this.menu.$el.classList.remove('loading');
      this.menuDirection = {
        above: c.menu.offset.top - c.menu.height - this.$el.clientHeight >= 0,
        below: c.menu.offset.top + c.menu.height < c.context.height,
      };
    },
  },
};
