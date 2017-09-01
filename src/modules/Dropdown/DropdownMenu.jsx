import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiDropdownMenu',
  data() {
    return { open: false };
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
  },
  methods: {
    setOpen(open) {
      this.open = open;
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('menu', this.open && 'visible', 'transition')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiDropdown',
  },
};
