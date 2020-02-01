import { SemanticUIVueMixin } from '../../lib';
import Results from './Results';

export default {
  name: 'SuiSearch',
  components: { Results },
  mixins: [SemanticUIVueMixin],
  props: {
    value: {
      type: Object,
      default: () => null,
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
    category: {
      type: Boolean,
      default: false,
      description: 'Whether to display search component in category mode.',
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
      firstFocus: false,
      internalQuery: null,
    };
  },
  computed: {
    resultsVisible() {
      return !!(
        this.internalQuery &&
        this.internalQuery.length >= this.minCharacters &&
        this.focused
      );
    },
  },
  watch: {
    internalQuery() {
      this.checkFirstSearch();
    },
  },
  created() {
    this.checkFirstSearch();
  },
  methods: {
    handleFocus() {
      this.focused = true;
      if (!this.firstFocus) this.firstFocus = true;
    },
    handleBlur() {
      this.focused = false;
    },
    checkFirstSearch() {
      if (
        this.internalQuery &&
        this.internalQuery.length >= this.minCharacters
      ) {
        this.firstSearch = true;
      }
    },
    handleSelect(item) {
      this.$emit('input', item);
      this.internalQuery = item.title;
    },
    handleInput(event) {
      this.internalQuery = event.target.value;
    },
    renderInput() {
      let input = (
        <input
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onInput={this.handleInput}
          value={this.value}
          class={this.classes('prompt')}
          {...{ attrs: this.$attrs }}
        />
      );
      input = this.input ? (
        <div class={this.classes('ui', 'icon', 'input')}>
          {input}
          {this.$slots.icon}
        </div>
      ) : (
        input
      );

      return input;
    },
  },
  render() {
    const ElementType = this.getElementType();

    return (
      <ElementType
        class={this.classes('ui', 'search', this.category ? 'category' : '')}
      >
        {this.renderInput()}
        {this.firstSearch && (
          <Results
            query={this.internalQuery}
            source={this.source}
            onSelected={this.handleSelect}
            category={this.category}
            firstFocus={this.firstFocus}
            visible={this.resultsVisible}
          />
        )}
      </ElementType>
    );
  },
};
