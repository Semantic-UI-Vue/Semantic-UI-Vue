import debounce from 'lodash/debounce';
import { getEventAnimationEnd, SemanticUIVueMixin } from '../../lib';
import { eventBus } from '../../lib/eventBus';

const visualStates = {
  closed: 'closed',
  opening: 'opening',
  open: 'open',
  closing: 'closing',
};

export default {
  name: 'SuiDropdownMenu',
  mixins: [SemanticUIVueMixin],
  data() {
    return {
      open: false,
      visualState: visualStates.closed,
      dropdown: null,
    };
  },
  computed: {
    animation() {
      const { animation } = this.$parent;
      switch (this.visualState) {
        case visualStates.opening:
          return `animating ${animation || ''} in visible`;
        case visualStates.closing:
          return `animating ${animation || ''} out visible`;
        default:
          return '';
      }
    },
  },
  watch: {
    open(newValue) {
      this.visualState = newValue ? visualStates.opening : visualStates.closing;
    },
  },
  destroyed() {
    document.body.removeEventListener('click', this.onBodyClickDebounced);
  },
  mounted() {
    this.onBodyClickDebounced = debounce(() => this.closeMenu(), 300);
    document.body.addEventListener('click', this.onBodyClickDebounced);
    eventBus.$on('dropdown-close', () => this.closeMenu());

    let parent = this.$parent;
    while (!this.dropdown && parent && !this.accordion) {
      if (/^SuiDropdownItem|SuiDropdown(WithRequired)?$/.test(parent.$options.name)) {
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
      this.visualState = this.open ? visualStates.open : visualStates.closed;
    },
    toggleMenu() {
      this.open = !this.open;
    },
    setOpen(open) {
      this.open = open;
    },
    closeMenu() {
      this.setOpen(false);
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        tabindex="-1"
        {...this.getChildPropsAndListeners()}
        class={this.classes('menu', this.open ? 'visible active' : '', 'transition', this.animation)}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiDropdown',
  },
};

//         class={this.classes('menu', this.cssOpen, 'transition', this.animation)}
