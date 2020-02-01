import Tab from './Tab';

export default {
  name: 'SuiTabPane',
  meta: {
    parent: 'SuiTab',
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    label: {
      type: String,
    },
    attached: {
      type: [Boolean, String],
      default: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
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
    try {
      this.findParent().addTab(this);
    } catch (e) {
      throw new Error('tab-pane was placed outside of tab component');
    }
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
    return (
      this.active && <div class={this.classList}>{this.$slots.default}</div>
    );
  },
};
