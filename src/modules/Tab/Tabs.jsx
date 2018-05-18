import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiTabs',
  mixins: [SemanticUIVueMixin],
  computed: {
  },
  data: () => ({
    tabs: [],
  }),
  methods: {
    addTab (item) {
      const index = this.$slots.default.indexOf(item.$vnode);
      this.tabs.splice(index, 0, item);
    },
    hideAllTabs () {
      this.tabs.forEach((tab) => {
        tab.active = false;
      });
    },
  },
  mounted () {
    this.tabs[0].active = true;
  },
  render() {
    const ElementType = this.getElementType();

    return (
      <ElementType>
        <div class="ui top attached tabular menu">
          {this.tabs.map((slot) => {
            return (
              <a
                class={`item ${slot.activeClass}`}
                onClick={(e) => {
                    this.hideAllTabs();
                    slot.active = true;
                  }}
              >{slot.label}</a>
            )
          })}
        </div>
        {this.$slots.default}
      </ElementType>
    );
  },
};
