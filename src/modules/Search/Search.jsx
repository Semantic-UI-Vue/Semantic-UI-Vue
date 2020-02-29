import { SemanticUIVueMixin } from '../../lib';
import Result from './Result';
import { debounce } from '../../lib/underscore';
import Input from '../../elements/Input/Input';

const inputPropsDef = Input.props;

export default {
  name: 'SuiSearch',
  mixins: [SemanticUIVueMixin],
  props: {
    ...inputPropsDef,
    apiSettings: {
      type: Object,
      description: 'Settings for API call.',
      default: () => ({
        action: 'search',
      }),
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
      filteredResults: [],
    };
  },
  created() {
    this.search = debounce(this.search, this.searchDelay);
  },
  methods: {
    handleInput(value) {
      this.searchTerm = value;
    },
    handleFocus() {
      this.searchFocused = true;
    },
    handleBlur() {
      this.searchFocused = false;
    },
    search(value) {
      this.executeAction(this.getEndpoint('search', { value })).then(
        results => {
          if (this.searchTerm === value) {
            this.searchLoading = false;
            this.filteredResults = results || [];
          }
        },
      );
    },
  },
  computed: {
    open() {
      return !!(
        this.searchTerm &&
        this.searchFocused &&
        !this.searchLoading &&
        this.filteredResults.length
      );
    },
    inputProps() {
      const result = Object.keys(inputPropsDef).reduce((result, propKey) => {
        result[propKey] = this.$props[propKey];
        return result;
      }, {});
      result.inputClass = 'prompt';
      result.value = this.searchTerm;
      return result;
    },
  },
  watch: {
    open() {
      this.animationTimeout = setTimeout(() => {
        this.animationTimeout = null;
      }, this.duration);
    },
    searchTerm() {
      if (this.searchTerm) {
        this.searchLoading = true;
        this.search(this.searchTerm);
      } else {
        this.searchLoading = false;
        this.filteredResults = [];
      }
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('ui', 'search')}
      >
        <Input
          {...{ props: this.inputProps }}
          placeholder={this.placeholder}
          onInput={this.handleInput}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          type="text"
        />
        <div
          class={this.classes(
            'results',
            'transition',
            this.animationTimeout &&
              `visible animating scale ${this.open ? 'in' : 'out'}`,
            !this.animationTimeout && (this.open ? 'visible' : 'hidden'),
          )}
        >
          {this.filteredResults.map(result =>
            this.$slots.result ? (
              this.$slots.result({
                result,
              })
            ) : (
              <Result {...{ props: result }} />
            ),
          )}
        </div>
      </ElementType>
    );
  },
};
