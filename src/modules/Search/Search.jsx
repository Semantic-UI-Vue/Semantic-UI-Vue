import { SemanticUIVueMixin } from '../../lib';
import { debounce } from '../../lib/underscore';
import Results from './Results';
import { Enum } from '../../lib/PropTypes';
import search from './utils/search';

export default {
  name: 'SuiSearch',
  mixins: [SemanticUIVueMixin],
  props: {
    action: {
      type: String,
      description: 'API action to use',
      default: () => 'search',
    },
    aligned: Enum.Floated({
      description:
        'A search can have its results aligned to its left or right container edge.',
    }),
    disabled: {
      type: Boolean,
      description:
        'A search can show it is currently unable to be interacted with.',
    },
    duration: {
      type: Number,
      description: 'Duration of animation events.',
      default: () => 300,
    },
    fluid: {
      type: Boolean,
      description:
        'A search can have its results take up the width of its container.',
    },
    fullTextSearch: Enum(['exact'], {
      type: [Boolean],
      default: () => true,
    }),
    loading: {
      type: Boolean,
      description: 'A search can show a loading indicator.',
    },
    maxResults: {
      type: Number,
      default: () => 7,
    },
    placeholder: {
      type: String,
      description: "Input's placeholder.",
    },
    searchDelay: {
      type: Number,
      default() {
        return 1000;
      },
      description: 'Delay before querying results on inputchange',
    },
    searchFields: {
      type: Array,
      default() {
        return ['title', 'description'];
      },
      description:
        'Specify object properties inside local source object which will be searched.',
    },
    source: {
      type: Array,
      description:
        "One of:\n- array of results e.g. `{ title: '', description: '' }` or\n- object of categories e.g. `{ name: '', results: [{ title: '', description: '' }] }`",
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
      searchFocused: false,
      request: null,
      filteredResults: null,
      valueState: null,
      loadingState: false,
    };
  },
  computed: {
    category() {
      return (
        this.filteredResults &&
        typeof this.filteredResults === 'object' &&
        !Array.isArray(this.filteredResults)
      );
    },
    internalLoading() {
      return this.loading || this.loadingState;
    },
    internalValue() {
      if (typeof this.value === 'undefined') return this.valueState;
      return this.value;
    },
  },
  watch: {
    internalValue() {
      if (this.internalValue) {
        this.loadingState = true;
        this.search(this.internalValue);
      } else {
        this.loadingState = false;
        this.filteredResults = null;
      }
    },
  },
  created() {
    if (!this.source) {
      this.search = debounce(this.search, this.searchDelay);
    }
  },
  methods: {
    handleInput(event) {
      this.valueState = typeof event === 'string' ? event : event.target.value;
      this.$emit('input', this.valueState);
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
          this.internalValue,
          this.source,
          this.searchFields,
          this.fullTextSearch,
        ).slice(0, this.maxResults);
        this.loadingState = false;
      } else {
        this.executeAction(this.getEndpoint(this.action, { value })).then(
          results => {
            if (this.internalValue === value) {
              this.loadingState = false;
              this.filteredResults = results;
            }
          },
        );
      }
    },
  },
  render() {
    const ElementType = this.getElementType();
    const promptClass = 'prompt';

    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.category && 'category',
          this.disabled && 'disabled',
          this.fluid && 'fluid',
          this.aligned,
          this.aligned && 'aligned',
          this.internalLoading && 'loading',
          'search',
        )}
      >
        {this.$scopedSlots.input ? (
          this.$scopedSlots.input({
            class: promptClass,
            props: {
              inputClass: promptClass,
              value: this.internalValue,
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
            type="text"
            value={this.internalValue}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onInput={this.handleInput}
          />
        )}
        <Results
          animationTimeout={this.animationTimeout}
          category={this.category}
          duration={this.duration}
          loading={this.internalLoading}
          results={this.filteredResults}
          searchFocused={this.searchFocused}
          value={this.internalValue}
          onSelect={this.handleSelect}
        />
      </ElementType>
    );
  },
};
