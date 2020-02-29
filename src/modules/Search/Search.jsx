import { SemanticUIVueMixin } from '../../lib';
import { debounce } from '../../lib/underscore';
import Results from './Results';

export default {
  name: 'SuiSearch',
  mixins: [SemanticUIVueMixin],
  props: {
    action: {
      type: String,
      description: 'API action to use',
      default: () => 'search',
    },
    duration: {
      type: Number,
      description: 'Duration of animation events.',
      default: () => 300,
    },
    placeholder: {
      type: String,
      description: "Input's placeholder.",
    },
    searchFields: {
      type: Array,
      default() {
        return ['title', 'description'];
      },
      description:
        'Specify object properties inside local source object which will be searched.',
    },
    searchDelay: {
      type: Number,
      default() {
        return 1000;
      },
      description: 'Delay before querying results on inputchange',
    },
    results: {
      type: Array,
      description:
        "One of:\n- array of results e.g. `{ title: '', description: '' }` or\n- object of categories e.g. `{ name: '', results: [{ title: '', description: '' }]`",
      default() {
        return [];
      },
    },
  },
  meta: {
    slots: {
      result: {
        description: 'Render the result.',
        scope: {
          result: {
            type: Object,
            description: 'Object in the result prop matching the search term.',
          },
        },
      },
    },
  },
  data() {
    return {
      animationTimeout: null,
      searchTerm: '',
      searchFocused: false,
      request: null,
      searchLoading: true,
      filteredResults: null,
    };
  },
  created() {
    this.search = debounce(this.search, this.searchDelay);
  },
  methods: {
    handleInput(event) {
      this.searchTerm = typeof event === 'string' ? event : event.target.value;
    },
    handleFocus() {
      this.searchFocused = true;
    },
    handleBlur() {
      this.searchFocused = false;
    },
    search(value) {
      this.executeAction(this.getEndpoint(this.action, { value })).then(
        results => {
          if (this.searchTerm === value) {
            this.searchLoading = false;
            this.filteredResults = results;
          }
        },
      );
    },
  },
  computed: {
    category() {
      return !Array.isArray(this.filteredResults);
    },
  },
  watch: {
    searchTerm() {
      if (this.searchTerm) {
        this.searchLoading = true;
        this.search(this.searchTerm);
      } else {
        this.searchLoading = false;
        this.filteredResults = null;
      }
    },
  },
  render() {
    const ElementType = this.getElementType();

    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('ui', this.category && 'category', 'search')}
      >
        {this.$scopedSlots.input ? (
          this.$scopedSlots.input({
            props: {
              inputClass: 'prompt',
              value: this.searchTerm,
            },
            handlers: {
              blur: this.handleBlur,
              input: this.handleInput,
              focus: this.handleFocus,
            },
          })
        ) : (
          <input
            class="prompt"
            placeholder={this.placeholder}
            onInput={this.handleInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            type="text"
          />
        )}
        <Results
          category={this.category}
          duration={this.duration}
          animationTimeout={this.animationTimeout}
          searchTerm={this.searchTerm}
          searchFocused={this.searchFocused}
          searchLoading={this.searchLoading}
          results={this.filteredResults}
        />
      </ElementType>
    );
  },
};
