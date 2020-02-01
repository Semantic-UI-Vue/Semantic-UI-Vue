import { SemanticUIVueMixin } from '../../lib';
import { forIn, groupBy, sortBy } from '../../lib/underscore';
import EmptyMessage from './EmptyMessage';
import Result from './Result';

export default {
  name: 'SuiSearchResults',
  components: { EmptyMessage, Result },
  mixins: [SemanticUIVueMixin],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    source: {
      type: Array,
      default: () => [],
    },
    query: {
      type: String,
      default: '',
    },
    category: {
      type: Boolean,
      default: false,
    },
    firstFocus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      prevQuery: '',
    };
  },
  computed: {
    transitionClass() {
      return this.visible ? 'in' : 'out';
    },
    results() {
      const results = this.filterResults(
        this.source,
        this.query,
        this.prevQuery,
      );
      return this.category
        ? this.renderCategoryResults(results)
        : this.renderResults(results);
    },
    visibleClass() {
      return this.firstFocus ? 'visible' : '';
    },
  },
  watch: {
    query(query) {
      if (query !== '') this.prevQuery = query;
    },
  },
  mounted() {
    this.prevQuery = this.query;
  },
  methods: {
    renderResults(results) {
      return results.length ? (
        results.map(item => this.renderResult(item))
      ) : (
        <EmptyMessage />
      );
    },
    renderCategoryResults(results) {
      const categorizedResultsObject = groupBy(results, 'category');
      let categorizedResultsArray = [];
      forIn(categorizedResultsObject, (value, key) =>
        categorizedResultsArray.push({ name: key, items: value }),
      );

      categorizedResultsArray = sortBy(categorizedResultsArray, 'name');

      return categorizedResultsArray.length ? (
        categorizedResultsArray.map(category => this.renderCategory(category))
      ) : (
        <EmptyMessage />
      );
    },
    renderResult(item) {
      return <Result onSelected={this.handleSelect} item={item} />;
    },
    filterResults(results, query, prevQuery) {
      return results.filter(item =>
        item.title
          .toLowerCase()
          .includes(
            query !== '' ? query.toLowerCase() : prevQuery.toLowerCase(),
          ),
      );
    },
    renderCategory(category) {
      return (
        <div class={this.classes('category')}>
          <div class={this.classes('name')}>{category.name}</div>
          <div class={this.classes('results')}>
            {category.items.map(item => this.renderResult(item))}
          </div>
        </div>
      );
    },
    handleSelect(item) {
      this.$emit('selected', item);
    },
  },
  render() {
    return (
      <div
        class={this.classes(
          'results',
          'transition',
          'scale',
          'fade',
          this.visibleClass,
          this.transitionClass,
        )}
      >
        {this.results}
      </div>
    );
  },
};
