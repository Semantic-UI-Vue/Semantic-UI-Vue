export default {
  name: 'SuiTabPane',
  props: {
    label: {
      type: String,
      required: true,
    },
    attached: {
      type: [Boolean, String],
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
      const list = [
        'ui',
        'tab',
        'segment',
        { loading: this.active && this.loading },
        { attached: this.attached },
        { active: this.active },
      ];

      if (typeof this.attached === 'string') {
        list.push(this.attached)
      }

      return list;
    },
  },
  mounted() {
    this.$parent.addTab(this);
  },
  methods: {
    open() {
      this.active = true;
    },
    close() {
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
