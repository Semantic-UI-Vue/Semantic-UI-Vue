export default {
  name: 'SuiTab',
  props: {
    label: {
      type: String,
      required: true,
    },
    attached: {
      type: Boolean,
      default: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    active: false,
  }),
  computed: {
    classList() {
      return [
        'ui',
        'tab',
        'segment',
        { loading: this.active && this.loading },
        { attached: this.attached },
        { active: this.active },
      ];
    },
  },
  mounted() {
    this.$parent.addTab(this);
  },
  methods: {
    setActive() {
      this.active = true;
    },
    setInactive() {
      this.active = false;
    },
  },
  render() {
    return (
      <div class={this.classList}>
        {this.$slots.default}
      </div>
    );
  },
};
