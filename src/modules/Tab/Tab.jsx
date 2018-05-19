import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiTab',
  mixins: [SemanticUIVueMixin],
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    active: false,
  }),
  computed: {
    activeClass() {
      return this.active ? 'active' : '';
    },
  },
  mounted() {
    this.$parent.addTab(this);
  },
  render() {
    const ElementType = this.getElementType();

    return (
      <ElementType
        class={`ui bottom attached tab segment ${this.activeClass}`}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
