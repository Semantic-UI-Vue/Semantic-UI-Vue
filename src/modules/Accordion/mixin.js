export default {
  props: {
    active: Boolean,
  },
  data() {
    return {
      dataActive: this.active,
      currentIndex: null,
      accordion: null,
    };
  },
  methods: {
    setActive(value) {
      this.dataActive = value;
    },
    toggle() {
      this.accordion.toggleEl(this);
    },
  },
  mounted() {
    let parent = this.$parent;
    while (parent && !this.accordion) {
      if (parent.$options.name === 'SuiAccordion') {
        this.accordion = parent;
      }

      parent = parent.$parent;
    }

    if (!this.accordion) {
      throw new Error(
        `${this.$options.name} must be place as a child of a SuiAccordion`,
      );
    }

    this.accordion.register(this);
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
