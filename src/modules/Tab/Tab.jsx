import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiTab',
  props: {
    menu: {
      type: Object,
      default: () => ({
        attached: true,
        tabular: true,
      }),
    },
    menuPosition: Enum(['left', 'right'], {
      description: 'Menu Position',
    }),
  },
  data: () => ({
    tabs: [],
  }),
  computed: {
    tabMenu() {
      return (
        <sui-menu {...{ props: this.menu }}>
          {this.tabs.map(tab =>
            <a
              class={['item', { active: tab.active }]}
              onClick={() => this.tabClick(tab)}
            >
              {tab.label}
            </a>,
          )}
        </sui-menu>
      );
    },
  },
  mounted() {
    if (!this.tabs.length) {
      throw new Error('tab used without tab-pane');
    }

    this.tabs[0].open();
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
    const slot = this.$slots.default;

    let renderable = [
      this.tabMenu,
      slot,
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
          {slot}
        </sui-grid-column>,
      ];

      if (this.menu.tabular === 'right' || this.menuPosition === 'right') {
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
