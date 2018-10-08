import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiPopup',
  description: 'A popup displays additional information on top of a page.',
  mixins: [SemanticUIVueMixin],
  props: {
  },
  render() {
    return <div>{this.$slots.trigger}</div>;
  },
};
