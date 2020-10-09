export default {
  props: {
    active: Boolean,
  },
  inject: ['registerToParent', 'toggleEl'],
  data() {
    return {
      dataActive: this.active,
      currentIndex: null,
    };
  },
  methods: {
    setActive(value) {
      this.dataActive = value;
    },
    toggle() {
      this.toggleEl(this);
    },
  },
  mounted() {
    if (!this.registerToParent || !this.toggleEl) {
      throw new Error(
        `${this.$options.name} must be place as a child of a SuiAccordion`,
      );
    }

    this.registerToParent(this);
  },
  watch: {
    active(value) {
      this.dataActive = value;
    },
  },
  meta: {
    parent: 'SuiAccordion',
  },
};
