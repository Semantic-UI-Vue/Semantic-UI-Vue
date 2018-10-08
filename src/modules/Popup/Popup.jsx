import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiPopup',
  mixins: [SemanticUIVueMixin],
  props: {
  },
  render() {
    return this.$slots.trigger;
  },
};
