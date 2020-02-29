import { SemanticUIVueMixin } from '../../lib';
import CategoryResults from './CategoryResults';
import SimpleResults from './SimpleResults';
import Result from './Result';

export default {
  name: 'SuiSearchResults',
  mixins: [SemanticUIVueMixin],
  props: {
    category: Boolean,
    duration: Number,
    searchTerm: String,
    searchFocused: Boolean,
    searchLoading: Boolean,
    results: [Array, Object],
  },
  data() {
    return {
      animationTimeout: null,
    };
  },
  computed: {
    open() {
      return !!(
        this.searchTerm &&
        this.searchFocused &&
        !this.searchLoading &&
        this.results
      );
    },
  },
  watch: {
    open() {
      this.animationTimeout = setTimeout(() => {
        this.animationTimeout = null;
      }, this.duration);
    },
  },
  methods: {
    handleSelect(result) {
      this.$emit('select', result);
    },
  },
  render() {
    const Component = this.category ? CategoryResults : SimpleResults;
    return (
      <div
        class={this.classes(
          'results',
          'transition',
          this.category && 'category',
          this.animationTimeout &&
            `visible animating scale ${this.open ? 'in' : 'out'}`,
          !this.animationTimeout && (this.open ? 'visible' : 'hidden'),
        )}
      >
        {this.results && (
          <Component
            results={this.results}
            {...{
              scopedSlots: {
                default: ({ result }) => {
                  return (
                    <Result
                      {...{ props: result }}
                      onSelect={this.handleSelect}
                    />
                  );
                },
              },
            }}
          ></Component>
        )}
      </div>
    );
  },
};
