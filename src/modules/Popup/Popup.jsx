import VFragment from '../../lib/VFragment';
import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import PopupContainer from './private/PopupContainer';
import { POSITIONS } from './private/popupConstants';
import PopupHeader from './PopupHeader';
import PopupContent from './PopupContent';

const HOVERABLE_BLUR_DELAY = 300;

export default {
  name: 'SuiPopup',
  description: 'A popup displays additional information on top of a page.',
  mixins: [SemanticUIVueMixin],
  props: {
    basic: {
      type: Boolean,
      description: 'Display the popup without the pointing arrow.',
    },
    content: {
      type: String,
      description: 'Simple text content for the popover.',
    },
    flowing: {
      type: Boolean,
      description:
        'A flowing Popup has no maximum width and continues to flow to fit its content.',
    },
    header: {
      type: String,
      description: 'Header displayed above the content in bold.',
    },
    hoverable: {
      type: Boolean,
      description: 'Whether the popup should not close on hover.',
    },
    inverted: {
      type: Boolean,
      description: 'Invert the colors of the Popup.',
    },
    position: Enum(POSITIONS, {
      description: 'Position for the popover.',
      default: 'top left',
    }),
    size: Enum(['mini', 'tiny', 'small', 'large', 'huge'], {
      description: 'Popup size.',
    }),
    wide: Enum(['very'], {
      type: Boolean,
      description: 'Popup width.',
    }),
  },
  data() {
    return {
      coords: null,
      open: false,
    };
  },
  mounted() {
    this.$slots.trigger[0].elm.addEventListener('mouseenter', this.handleOpen);
    this.$slots.trigger[0].elm.addEventListener('mouseleave', this.handleBlur);
  },
  methods: {
    handleOpen() {
      this.coords = this.$slots.trigger[0].elm.getBoundingClientRect();
      this.open = true;
      this.$emit('open');
    },
    handleBlur() {
      if (this.hoverable) {
        this.blurTimeout = setTimeout(this.close, HOVERABLE_BLUR_DELAY);
      } else {
        this.close();
      }
    },
    handleContainerHover() {
      if (this.hoverable && this.blurTimeout) {
        clearTimeout(this.blurTimeout);
      }
    },
    close() {
      this.open = false;
      this.$emit('close');
    },
  },
  render() {
    return (
      <VFragment>
        {this.$slots.trigger}
        {this.open && (
          <PopupContainer
            onMouseover={this.handleContainerHover}
            onMouseleave={this.handleBlur}
            popupClass={this.classes(
              this.basic && 'basic',
              this.flowing && 'flowing',
              this.inverted && 'inverted',
              this.size,
              this.wide,
              this.wide && 'wide',
            )}
            triggerCoords={this.coords}
            position={this.position}
            content={this.content}
          >
            {this.header && <PopupHeader>{this.header}</PopupHeader>}
            {this.content && <PopupContent>{this.content}</PopupContent>}
            {this.$slots.default}
          </PopupContainer>
        )}
      </VFragment>
    );
  },
};
