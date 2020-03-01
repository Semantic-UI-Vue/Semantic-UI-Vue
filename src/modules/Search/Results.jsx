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
    searchFocused: Boolean,
    loading: Boolean,
    value: String,
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
        this.value &&
        this.searchFocused &&
        !this.loading &&
        this.results
      );
    },
    empty() {
      return !(
        this.results &&
        typeof this.results === 'object' &&
        (this.results.length || Object.keys(this.results).length)
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
    return this.empty ? null : (
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
        <Component
          results={this.results}
          {...{
            scopedSlots: {
              default: ({ result }) => {
                return (
                  <Result {...{ props: result }} onSelect={this.handleSelect} />
                );
              },
            },
          }}
        ></Component>
      </div>
    );
  },
};
