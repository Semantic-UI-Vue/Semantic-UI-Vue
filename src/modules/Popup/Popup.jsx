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
      triggerElm: null,
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
      this.triggerElm = this.$slots.trigger[0].elm;
      this.open = true;
    },
  },
  render() {
    return (
      <VFragment>
        {this.$slots.trigger}
        {this.open && (
          <PopupContainer
            trigger-elm={this.triggerElm}
            position={this.position}
          >
            {this.$slots.default || this.content}
          </PopupContainer>
        )}
      </VFragment>
    );
  },
};
