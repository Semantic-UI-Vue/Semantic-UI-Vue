import { SemanticUIVueMixin } from '../../lib';
import { debounce } from '../../lib/underscore';
import Results from './Results';
import { Enum } from '../../lib/PropTypes';
import search from './search';

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
    fullTextSearch: Enum(['exact'], {
      type: [Boolean],
      default: () => true,
    }),
    maxResults: {
      type: Number,
      default: () => 7,
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
    source: {
      type: Array,
      description:
        "One of:\n- array of results e.g. `{ title: '', description: '' }` or\n- object of categories e.g. `{ name: '', results: [{ title: '', description: '' }]`",
    },
    value: {
      type: String,
      description: 'Current value of the search input.',
    },
  },
  meta: {
    slots: {
      input: {
        description: 'Custom input.',
        scope: {
          class: {
            type: String,
            description:
              'CSS class to give to the input. Do not use with sui-input, use `props` instead.',
          },
          props: {
            type: Object,
            description: 'Props to pass to sui-input.',
          },
          handlers: {
            type: Object,
            description: 'Handlers to pass to the input.',
          },
        },
      },
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
      searchTerm: this.value,
      searchFocused: false,
      request: null,
      searchLoading: true,
      filteredResults: null,
    };
  },
  created() {
    if (!this.source) {
      this.search = debounce(this.search, this.searchDelay);
    }
  },
  methods: {
    handleInput(event) {
      this.searchTerm = typeof event === 'string' ? event : event.target.value;
      this.$emit('input', this.searchTerm);
    },
    handleSelect(result) {
      this.$emit('select', result);
      this.handleInput(result.title);
    },
    handleFocus() {
      this.searchFocused = true;
    },
    handleBlur() {
      this.searchFocused = false;
    },
    search(value) {
      if (this.source) {
        this.filteredResults = search(
          this.searchTerm,
          this.source,
          this.searchFields,
          this.fullTextSearch,
        ).slice(0, this.maxResults);
        this.searchLoading = false;
      } else {
        this.executeAction(this.getEndpoint(this.action, { value })).then(
          results => {
            if (this.searchTerm === value) {
              this.searchLoading = false;
              this.filteredResults = results;
            }
          },
        );
      }
    },
  },
  computed: {
    category() {
      return !Array.isArray(this.filteredResults);
    },
  },
  watch: {
    value() {
      this.searchTerm = this.value;
    },
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
    const promptClass = 'prompt';

    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('ui', this.category && 'category', 'search')}
      >
        {this.$scopedSlots.input ? (
          this.$scopedSlots.input({
            class: promptClass,
            props: {
              inputClass: promptClass,
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
            value={this.searchTerm}
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
          onSelect={this.handleSelect}
        />
      </ElementType>
    );
  },
};
