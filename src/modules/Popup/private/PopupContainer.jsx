import mapValues from 'lodash/mapValues';
import { isBrowser, SemanticUIVueMixin } from '../../../lib';

export default {
  name: 'SuiPrivatePopupContainer',
  mixins: [SemanticUIVueMixin],
  props: {
    triggerElm: isBrowser ? [HTMLElement, Object] : Object,
    position: String,
  },
  data() {
    return {
      mountedPosition: this.position,
      mountedStyle: null,
      triggerCoords: this.triggerElm.getBoundingClientRect(),
    };
  },
  mounted() {
    this.$emit('mount', this.$el);
    this.popupCoords = this.$el.getBoundingClientRect();
    this.setPopupStyle();
  },
  methods: {
    computePopupStyle(positions) {
      const style = { position: 'absolute' };

      // Do not access window/document when server side rendering
      if (!isBrowser) return style;

      const { offset, triggerElm } = this;
      const { offsetHeight, offsetWidth } = this.$el;

      style.width = offsetWidth;

      if (positions.includes('right')) {
        style.left = Math.round(triggerElm.offsetLeft + triggerElm.offsetWidth - offsetWidth);
      } else if (positions.includes('left')) {
        style.left = Math.round(triggerElm.offsetLeft);
      } else { // if not left nor right, we are horizontally centering the element
        style.left = Math.round(
          triggerElm.offsetLeft + (triggerElm.offsetWidth / 2) - (offsetWidth / 2),
        );
      }

      if (positions.includes('top')) {
        style.top = Math.round(this.triggerElm.offsetTop - this.$el.offsetHeight - 7);
      } else if (positions.includes('bottom')) {
        style.top = Math.round(this.triggerElm.offsetTop + this.triggerElm.offsetHeight);
      } else { // if not top nor bottom, we are vertically centering the element
        style.top = Math.round(
          this.triggerElm.offsetTop + (triggerElm.offsetHeight / 2) - (offsetHeight / 2),
        );

        const xOffset = offsetWidth + 8;
        if (positions.includes('right')) {
          style.left += xOffset;
        } else {
          style.left -= xOffset;
        }
      }

      if (offset) {
        if (typeof style.right === 'number') {
          style.right -= offset;
        } else {
          style.left -= offset;
        }
      }

      return style;
    },
    setPopupStyle() {
      if (!this.triggerCoords || !this.popupCoords) return;
      const { position } = this;

      let style = this.computePopupStyle(position);

      // Append 'px' to every numerical values in the style
      style = mapValues(style, value => (typeof value === 'number' ? `${value}px` : value));
      this.mountedStyle = style;
      this.mountedPosition = position;
    },
  },
  render() {
    const className = this.classes(
      'ui',
      this.mountedPosition,
      'popup',
      'transition visible',
    );

    return (
      <div class={className} style={this.mountedStyle}>
        {this.$slots.default}
      </div>
    );
  },
};
