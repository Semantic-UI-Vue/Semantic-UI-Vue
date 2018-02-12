import { getEventAnimationEnd, classes, getChildProps, getElementType } from '../../lib';

const states = {
  closed: 'closed',
  opening: 'opening',
  open: 'open',
  closing: 'closing',
};

const animation = 'slide down';

function buildAnimation(name, direction) {
  return `transition animating ${name} ${direction ? 'in' : 'out'} visible`;
}

export default {
  name: 'SuiDropdownMenu',
  data() {
    return {
      open: false,
      visualState: states.closed,
    };
  },
  computed: {
    classes() {
      switch (this.visualState) {
        case states.opening:
          return `${buildAnimation(animation, true)} active`;
        case states.open:
          return 'visible active';
        case states.closing:
          return buildAnimation(animation, false);
        default:
          return '';
      }
    },
  },
  watch: {
    open(newValue) {
      this.visualState = newValue ? states.opening : states.closing;
    },
  },
  mounted() {
    let parent = this.$parent;
    while (parent && !this.accordion) {
      if (parent.$options.name === 'SuiDropdown') {
        this.dropdown = parent;
      }

      parent = parent.$parent;
    }

    if (!this.dropdown) {
      throw new Error('SuiDropdownMenu must be place as a child of a SuiDropdown');
    }
    this.dropdown.register(this);
    this.$el.addEventListener(getEventAnimationEnd(), this.onAnimationEnded, false);
  },
  methods: {
    onAnimationEnded() {
      this.visualState = this.open ? states.open : states.closed;
    },
    setOpen(open) {
      this.open = open;
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('menu', this.open && 'visible', 'transition', this.classes)}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiDropdown',
  },
};
