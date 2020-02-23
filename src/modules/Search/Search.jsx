import { SemanticUIVueMixin } from '../../lib';
import Result from './Result';
import { debounce } from '../../lib/underscore';

export default {
  name: 'SuiSearch',
  mixins: [SemanticUIVueMixin],
  props: {
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
      input: {
        description: 'Search input.',
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
      searchTerm: '',
      focus: false,
      request: null,
      loading: true,
      fetchedResults: [],
    };
  },
  created() {
    this.search = debounce(this.search, this.searchDelay);
  },
  methods: {
    handleInput(e) {
      this.searchTerm = e.target.value;
    },
    handleFocus() {
      this.focus = true;
    },
    handleBlur() {
      this.focus = false;
    },
    search(value) {
      this.executeAction(this.getEndpoint('search', { value })).then(
        results => {
          console.log(results);
          if (this.searchTerm === value) {
            this.loading = false;
            this.fetchedResults = results;
          }
        },
      );
    },
  },
  computed: {
    open() {
      return (
        this.searchTerm &&
        this.focus &&
        !this.loading &&
        this.fetchedResults.length
      );
    },
    filteredResults() {
      return this.results.filter(result => {
        for (let property of this.searchFields) {
          if (result[property].includes(this.searchTerm)) return true;
        }
        return false;
      });
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
        this.loading = true;
        this.search(this.searchTerm);
      } else {
        this.loading = false;
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
        {this.$slots.input || (
          <input
            class="prompt"
            type="text"
            placeholder={this.placeholder}
            onInput={this.handleInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        )}
        <div
          class={this.classes(
            'results',
            'transition',
            this.animationTimeout &&
              `visible animating scale ${this.open ? 'in' : 'out'}`,
            !this.animationTimeout && (this.open ? 'visible' : 'hidden'),
          )}
        >
          {this.results.map(result =>
            this.$slots.result ? (
              this.$slots.result({
                result,
              })
            ) : (
              <Result {...result} />
            ),
          )}
        </div>
      </ElementType>
    );
  },
};
