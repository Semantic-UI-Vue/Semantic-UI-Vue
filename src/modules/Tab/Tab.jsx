import Menu from '../../collections/Menu/Menu';

export default {
  name: 'SuiTab',
  components: {
    Menu,
  },
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
    if (this.tabs.length) {
      this.tabs[0].open();
    }
  },
  methods: {
    addTab(tab) {
      this.tabs.push(tab);
    },
    closeAllTabs() {
      this.tabs.forEach((tab) => {
        tab.close();
      });
    },
    tabClick(tab) {
      this.closeAllTabs();
      tab.open();
    },
  },
  render() {
    const controls = (
      <Menu {...{ props: this.menu }}>
        {this.tabs.map(tab =>
          <a
            class={['item', { active: tab.active }]}
            onClick={() => this.tabClick(tab)}
          >
            {tab.label}
          </a>,
        )}
      </Menu>
    );

    const renderOrder = [
      controls,
      this.$slots.default,
    ];

    if (this.menu.attached === 'bottom') {
      renderOrder.reverse();
    }

    if (this.menu.vertical) {
      return (
        <sui-grid>
          <sui-grid-row>
            <sui-grid-column width={4}>
              {controls}
            </sui-grid-column>
            <sui-grid-column width={12}>
              {this.$slots.default}
            </sui-grid-column>
          </sui-grid-row>
        </sui-grid>
      );
    }

    return (
      <div>
        {[...renderOrder]}
      </div>
    );
  },
};
