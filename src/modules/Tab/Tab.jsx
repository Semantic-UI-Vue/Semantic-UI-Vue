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
    activeIndex: {
      type: [String, Number],
      default: 0,
    },
  },
  data: () => ({
    tabs: [],
  }),
  computed: {
    tabMenu() {
      return (
        <sui-menu {...{ props: this.menu }}>
          {this.tabs.map((tab, index) =>
            <a
              class={['item', { active: tab.active }]}
              onClick={e => this.tabClick(e, tab, index)}
            >
              {tab.label}
            </a>,
          )}
        </sui-menu>
      );
    },
  },
  watch: {
    activeIndex(i) {
      const index = +i;
      this.tabClick(null, this.tabs[index], index);
    },
  },
  mounted() {
    if (!this.tabs.length) {
      throw new Error('tab used without tab-pane');
    }

    const pane = (this.tabs[this.activeIndex] || this.tabs[0]);
    pane.open();
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
    tabClick(e, tab, index) {
      this.$emit('update:activeIndex', index);

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
