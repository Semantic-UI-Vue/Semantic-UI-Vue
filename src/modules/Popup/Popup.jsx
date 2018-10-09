import { component as VFragment } from 'vue-fragments';
import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import PopupContainer from './private/PopupContainer';
import { POSITIONS } from './private/popupConstants';

export default {
  name: 'SuiPopup',
  description: 'A popup displays additional information on top of a page.',
  mixins: [SemanticUIVueMixin],
  props: {
    content: {
      type: String,
      description: 'Simple text content for the popover.',
    },
    position: Enum(POSITIONS, {
      description: 'Position for the popover.',
      default: 'top left',
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
            triggerCoords={this.coords}
            position={this.position}
          >
            {this.$slots.default || this.content}
          </PopupContainer>
        )}
      </VFragment>
    );
  },
};
