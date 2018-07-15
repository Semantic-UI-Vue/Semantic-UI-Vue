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
          {this.tabs.map(tab =>
            <a
              class={['item', { active: tab.active }]}
              onClick={e => this.openTab({ e, tab })}
            >
              {tab.title}
            </a>,
          )}
        </sui-menu>
      );
    },
  },
  watch: {
    activeIndex(i) {
      this.openTab({
        tab: this.tabs[+i],
        emitChange: true,
        updateActiveIndex: false,
      });
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
      for (let n = 0, len = this.tabs.length; n < len; n += 1) {
        this.tabs[n].close();
      }
    },
    openTab({ e = null, tab, emitChange = true, updateActiveIndex = true }) {
      this.closeAllTabs();
      tab.open();

      const index = this.tabs.indexOf(tab);

      if (emitChange) {
        this.$emit('change', e, tab, index);
      }

      if (updateActiveIndex) {
        this.$emit('update:activeIndex', index);
      }
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
