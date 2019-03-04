import { SemanticUIVueMixin } from '../../lib';
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
  },
  data() {
    return {
      prevQuery: '',
    };
  },
  computed: {
    transitionClass() {
      return (this.visible) ? 'in' : 'out';
    },
    results() {
      const results = this.source.filter(item => item.name.toLowerCase()
        .includes(this.query !== '' ? this.query.toLowerCase() : this.prevQuery.toLowerCase()));
      return (
        results.length ? results.map(item => <Result item={item} />) : <EmptyMessage/>
      );
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
  render() {
    return (
      <div class={this.classes('results', 'transition', 'scale', 'fade', 'visible', this.transitionClass)}>
        {this.results}
      </div>
    );
  },
};
