import Tab from './Tab';

export default {
  name: 'SuiTabPane',
  meta: {
    parent: 'SuiTab',
  },
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
        list.push(this.attached);
      }

      return list;
    },
  },
  mounted() {
    this.findParent().addTab(this);
  },
  methods: {
    findParent() {
      let parent = this.$parent;
      const name = Tab.name;

      while (parent.$options.name !== name) {
        parent = parent.$parent;
      }

      return parent;
    },
    open() {
      this.active = true;
    },
    close() {
      this.active = false;
    },
  },
  render() {
    return this.active && (
      <div class={this.classList}>
        {this.$slots.default}
      </div>
    );
  },
};
