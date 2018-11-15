import VFragment from '../../lib/VFragment';
import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import PopupContainer from './private/PopupContainer';
import { POSITIONS } from './private/popupConstants';
import PopupHeader from './PopupHeader';
import PopupContent from './PopupContent';

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
      description: 'A flowing Popup has no maximum width and continues to flow to fit its content.',
    },
    header: {
      type: String,
      description: 'Header displayed above the content in bold.',
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
    wide: Enum(['wide'], {
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
    this.$slots.trigger[0].elm.addEventListener('mouseleave', () => {
      this.open = false;
    });
  },
  methods: {
    handleOpen() {
      this.coords = this.$slots.trigger[0].elm.getBoundingClientRect();
      this.open = true;
    },
  },
  render() {
    return (
      <VFragment>
        {this.$slots.trigger}
        {this.open && (
          <PopupContainer
            popupClass={this.classes(
              this.basic && 'basic',
              this.flowing && 'flowing',
              this.inverted && 'inverted',
              this.size,
              this.wide, this.wide && 'wide',
            )}
            triggerCoords={this.coords}
            position={this.position}
          >
            {this.header && (
              <PopupHeader>{this.header}</PopupHeader>
            )}
            {this.content && (
              <PopupContent>{this.content}</PopupContent>
            )}
            {this.$slots.default}
          </PopupContainer>
        )}
      </VFragment>
    );
  },
};
