import { SemanticUIVueMixin } from '../../lib';
import CategoryResults from './CategoryResults';
import SimpleResults from './SimpleResults';

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
        {this.results && <Component results={this.results} />}
      </div>
    );
  },
};
