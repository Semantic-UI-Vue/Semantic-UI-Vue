import { SemanticUIVueMixin } from '../../lib';
import Menu from '../../collections/Menu/Menu';

export default {
  name: 'SuiTabs',
  components: {
    Menu,
  },
  mixins: [SemanticUIVueMixin],
  props: {
    menu: {
      type: Object,
      default: () => ({
        attached: true,
        tabular: true,
      }),
    },
  },
  data: () => ({
    tabs: [],
  }),
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
        <Menu {...{ props: this.menu }}>
          {this.tabs.map(tab =>
              <a
                class={this.itemClassList(tab)}
                onClick={() => this.tabClick(tab)}
              >
                {tab.label}
              </a>,
          )},
        </Menu>
        {this.$slots.default}
      </ElementType>
    );
  },
};
