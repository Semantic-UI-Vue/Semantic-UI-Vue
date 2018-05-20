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
    classList(tab) {
      return [
        'item',
        { active: tab.active },
      ];
    },
    addTab(tab) {
      this.tabs.push(tab);
    },
    hideAllTabs() {
      this.tabs.forEach((tab) => {
        tab.setInactive();
      });
    },
    tabClick(tab) {
      this.hideAllTabs();
      tab.setActive();
    },
  },
  render() {
    const ElementType = this.getElementType();

    return (
      <ElementType>
        <div class="ui top attached tabular menu">
          {this.tabs.map(tab =>
              <a
                class={this.classList(tab)}
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
