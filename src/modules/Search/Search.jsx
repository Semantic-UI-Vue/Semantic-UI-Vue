import { SemanticUIVueMixin } from '../../lib';
import Results from './Results';

export default {
  name: 'SuiSearch',
  components: { Results },
  mixins: [SemanticUIVueMixin],
  props: {
    value: {
      type: String,
      default: '',
      description: 'Value of the search',
    },
    source: {
      type: Array,
      default: () => [],
      description: 'Specify a Javascript object which will be searched locally',
    },
  },
  data() {
    return {
      focused: false,
    };
  },
  computed: {
    resultsVisible() {
      return !!(this.value && this.value !== '' && this.focused);
    },
  },
  methods: {
    handleInput(event) {
      const eventValue = event.target.value;
      const value = this.type === 'number' ? Number(eventValue) : eventValue;
      this.$emit('input', value);
    },
    handleFocus() {
      this.focused = true;
    },
    handleBlur() {
      this.focused = false;
    },
  },
  render() {
    const ElementType = this.getElementType();

    return (
        <ElementType
          class={this.classes(
            'ui',
            'search',
          )}>
          <input onBlur={this.handleBlur}
                 onFocus={this.handleFocus}
                 onInput={this.handleInput}
                 value={this.value}
                 class={this.classes('prompt')}
                 {...{ attrs: this.$attrs }}/>
          {this.value !== null &&
            <Results query={this.value} source={this.source} visible={this.resultsVisible}/>
          }
        </ElementType>
    );
  },
};
