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
  computed: {
    tabMenu() {
      return (
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
    },
    slot() {
      return this.$slots.default;
    },
  },
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
    let renderable = [
      this.tabMenu,
      this.slot,
    ];

    if (this.menu.attached === 'bottom') {
      renderable.reverse();
    }

    if (this.menu.vertical) {
      renderable = [
        <sui-grid-column width={4}>
          {this.tabMenu}
        </sui-grid-column>,
        <sui-grid-column width={12} class="stretched">
          {this.slot}
        </sui-grid-column>,
      ];

      if (this.menu.tabular === 'right') {
        renderable.reverse();
      }

      renderable = (
        <sui-grid>
          <sui-grid-row>
            {renderable}
          </sui-grid-row>
        </sui-grid>
      );
    }

    return (
      <div>
        {Array.isArray(renderable) ? [...renderable] : renderable}
      </div>
    );
  },
};
