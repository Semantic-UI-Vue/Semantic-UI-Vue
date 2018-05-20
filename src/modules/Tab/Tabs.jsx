import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiTabs',
  mixins: [SemanticUIVueMixin],
  props: {
    tabular: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    tabs: [],
  }),
  computed: {
    elClassList() {
      return [
        'ui',
        'top',
        'menu',
        'attached',
        { tabular: this.tabular },
      ];
    },
  },
  mounted() {
    this.tabs[0].active = true;
  },
  methods: {
    itemClassList(tab) {
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
        <div class={this.elClassList}>
          {this.tabs.map(tab =>
              <a
                class={this.itemClassList(tab)}
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
