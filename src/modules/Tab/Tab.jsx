import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiTab',
  mixins: [SemanticUIVueMixin],
  props: {
    label: {
      type: String,
      required: true,
    },
    attached: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    active: false,
  }),
  computed: {
    classList() {
      return [
        'ui',
        'tab',
        'segment',
        { attached: this.attached },
        { active: this.active },
      ];
    },
  },
  mounted() {
    this.$parent.addTab(this);
  },
  methods: {
    setActive() {
      this.active = true;
    },
    setInactive() {
      this.active = false;
    },
  },
  render() {
    const ElementType = this.getElementType();

    return (
      <ElementType
        class={this.classList}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
