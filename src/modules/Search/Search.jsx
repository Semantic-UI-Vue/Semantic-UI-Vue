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
    minCharacters: {
      type: Number,
      default: 1,
      descriptiom: 'Minimum characters to query for results',
    },
    input: {
      type: Boolean,
      default: false,
      description: 'Whether the search component should has input class.',
    },
  },
  data() {
    return {
      focused: false,
      firstSearch: null,
    };
  },
  computed: {
    resultsVisible() {
      return !!(this.value && (this.value.length >= this.minCharacters) && this.focused);
    },
  },
  watch: {
    value() {
      this.checkFirstSearch();
    },
  },
  created() {
    this.checkFirstSearch();
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
    checkFirstSearch() {
      if (this.value && (this.value.length >= this.minCharacters) && this.firstSearch === null) {
        this.firstSearch = true;
      }
    },
    renderInput() {
      let input = <input onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onInput={this.handleInput}
                    value={this.value}
                    class={this.classes('prompt')}
                    {...{ attrs: this.$attrs }}/>;
      input = this.input ? <div class={this.classes('ui', 'icon', 'input')}>{input}{this.$slots.icon}</div> : input;

      return input;
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
          {this.renderInput()}
          {this.firstSearch &&
          <Results query={this.value} source={this.source} visible={this.resultsVisible}/>
          }
        </ElementType>
    );
  },
};
