import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiAccordion',
  props: {
    activeIndex: [Number, Array],
    exclusive: Boolean,
    fluid: Boolean,
    inverted: Boolean,
    panels: Array,
    styled: Boolean,
  },
  data() {
    let active;

    if (this.exclusive) {
      if (Array.isArray(this.activeIndex)) {
        active = this.activeIndex[0];
      } else {
        active = this.activeIndex;
      }
    } else if (!Array.isArray(this.activeIndex)) {
      active = [this.activeIndex];
    } else {
      active = this.activeIndex;
    }

    return {
      active,
      panelElms: [],
    };
  },
  methods: {
    register(el) {
      let panelIndex = -1;
      let found;

      const walkChildren = (children) => {
        children.some((child) => {
          if (child.$options.name === 'SuiAccordion') return false;
          if (child.$options.name === 'SuiAccordionTitle') panelIndex += 1;
          if (child === el) {
            this.panelElms[panelIndex] = {
              ...(this.panelElms[panelIndex] || {}),
              [child.$options.name]: child,
            };

            found = true;
            return true;
          }

          walkChildren(child.$children);
          return found;
        });
      };

      walkChildren(this.$children);
    },
    toggleEl(el) {
      this.panelElms.some((panel, index) => {
        if (panel.SuiAccordionTitle === el || panel.SuiAccordionContent === el) {
          this.toggle(index);
          return true;
        }
        return false;
      });
    },
    toggle(index) {
      if (this.exclusive) {
        if (this.active === index) this.active = null;
        else this.active = index;
      } else if (this.active.includes(index)) {
        this.active = this.active.filter(i => i !== index);
      } else {
        this.active = this.active.concat([index]);
      }

      if (this.panelElms) this.toggleChildren();
    },
    toggleChildren() {
      this.panelElms.forEach((panel, i) => {
        const active = this.isPanelActive(i);
        if (panel.SuiAccordionTitle) {
          panel.SuiAccordionTitle.setActive(active);
        }
        if (panel.SuiAccordionContent) {
          panel.SuiAccordionContent.setActive(active);
        }
      });
    },
    isPanelActive(index) {
      if (Array.isArray(this.active)) {
        return this.active.includes(index);
      }
      return this.active === index;
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('ui', this.inverted && 'inverted', this.styled && 'styled', 'accordion')}
      >
        {this.panels ? this.panels.map(({ title, content }, index) => (
          <template>
            <div
              class={classes('title', this.isPanelActive(index) && 'active')}
              onClick={() => this.toggle(index)}
            >
              {title}
            </div>
            <div class={classes('content', this.isPanelActive(index) && 'active')}>
              {content}
            </div>
          </template>
        )) : this.$slots.default}
      </ElementType>
    );
  },
};
