import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiTabs',
  mixins: [SemanticUIVueMixin],
  data: () => ({
    tabs: [],
  }),
  mounted() {
    this.tabs[0].active = true;
  },
  methods: {
    addTab(item) {
      const index = this.$slots.default.indexOf(item.$vnode);
      this.tabs.splice(index, 0, item);
    },
    hideAllTabs() {
      this.tabs.forEach((tab) => {
        tab.active = false;
      });
    },
    tabClick(slot) {
      this.hideAllTabs();
      slot.active = true;
    },
  },
  render() {
    const ElementType = this.getElementType();

    return (
      <ElementType>
        <div class="ui top attached tabular menu">
          {this.tabs.map(tab =>
              <a
                class={`item ${tab.activeClass}`}
                onClick={() => this.tabClick(tab)}
              >
                {tab.label}
              </a>,
          )},
        </div>
        {this.$slots.default}
      </ElementType>
    );
  },
};
