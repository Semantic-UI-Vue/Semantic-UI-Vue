import { isBrowser, SemanticUIVueMixin } from '../../../lib';
import { mapValues, without } from '../../../lib/underscore';
import { POSITIONS } from './popupConstants';

export default {
  name: 'SuiPrivatePopupContainer',
  mixins: [SemanticUIVueMixin],
  props: {
    popupClass: String,
    triggerCoords: isBrowser ? [window.DOMRect, Object] : Object,
    position: String,
  },
  data() {
    return {
      mountedPosition: this.position,
      mountedStyle: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.popupCoords = this.$refs.container.getBoundingClientRect();
      this.setPopupStyle();
    });
  },
  methods: {
    computePopupStyle(positions) {
      const style = { position: 'absolute' };

      // Do not access window/document when server side rendering
      if (!isBrowser) return style;

      const { offset } = this;
      const { pageYOffset, pageXOffset } = window;
      const { clientWidth, clientHeight } = document.documentElement;

      if (positions.includes('right')) {
        style.right = Math.round(
          clientWidth - (this.triggerCoords.right + pageXOffset),
        );
        style.left = 'auto';
      } else if (positions.includes('left')) {
        style.left = Math.round(this.triggerCoords.left + pageXOffset);
        style.right = 'auto';
      } else {
        // if not left nor right, we are horizontally centering the element
        const xOffset = (this.triggerCoords.width - this.popupCoords.width) / 2;
        style.left = Math.round(
          this.triggerCoords.left + xOffset + pageXOffset,
        );
        style.right = 'auto';
      }

      if (positions.includes('top')) {
        style.bottom = Math.round(
          clientHeight - (this.triggerCoords.top + pageYOffset),
        );
        style.top = 'auto';
      } else if (positions.includes('bottom')) {
        style.top = Math.round(this.triggerCoords.bottom + pageYOffset);
        style.bottom = 'auto';
      } else {
        // if not top nor bottom, we are vertically centering the element
        const yOffset =
          (this.triggerCoords.height + this.popupCoords.height) / 2;
        style.top = Math.round(
          this.triggerCoords.bottom + pageYOffset - yOffset,
        );
        style.bottom = 'auto';

        const xOffset = this.popupCoords.width + 8;
        if (positions.includes('right')) {
          style.right -= xOffset;
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
    isStyleInViewport(style) {
      const { pageYOffset, pageXOffset } = window;
      const { clientWidth, clientHeight } = document.documentElement;

      const element = {
        top: style.top,
        left: style.left,
        width: this.popupCoords.width,
        height: this.popupCoords.height,
      };

      if (typeof style.right === 'number') {
        element.left = clientWidth - style.right - element.width;
      }
      if (typeof style.bottom === 'number') {
        element.top = clientHeight - style.bottom - element.height;
      }

      // hidden on top
      if (element.top < pageYOffset) return false;
      // hidden on the bottom
      if (element.top + element.height > pageYOffset + clientHeight)
        return false;
      // hidden the left
      if (element.left < pageXOffset) return false;
      // hidden on the right
      if (element.left + element.width > pageXOffset + clientWidth)
        return false;

      return true;
    },
    setPopupStyle() {
      if (!this.triggerCoords || !this.popupCoords) return;
      let { position } = this;
      let style = this.computePopupStyle(position);

      // Lets detect if the popup is out of the viewport and adjust
      // the position accordingly
      const positions = without(POSITIONS, position).concat([position]);
      for (
        let i = 0;
        !this.isStyleInViewport(style) && i < positions.length;
        i += 1
      ) {
        style = this.computePopupStyle(positions[i]);
        position = positions[i];
      }

      // Append 'px' to every numerical values in the style
      style = mapValues(style, value =>
        typeof value === 'number' ? `${value}px` : value,
      );
      this.mountedStyle = style;
      this.mountedPosition = position;
    },
  },
  render() {
    const className = this.classes(
      'ui',
      this.mountedPosition,
      this.popupClass,
      'popup',
      'transition visible',
    );

    return (
      <portal to="semantic-ui-vue">
        <div
          ref="container"
          class={className}
          style={this.mountedStyle}
          onMouseover={() => this.$emit('mouseover')}
          onMouseleave={() => this.$emit('mouseleave')}
        >
          {this.$slots.default}
        </div>
      </portal>
    );
  },
};
