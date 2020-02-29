import VFragment from '../../lib/VFragment';
import SimpleResults from './SimpleResults';

export default {
  name: 'SuiSearchCategoryResults',
  props: {
    results: Object,
  },
  computed: {
    categories() {
      return Object.keys(this.results);
    },
  },
  render() {
    return (
      <VFragment>
        {this.categories.map(category => (
          <div class="category" key={category}>
            <SimpleResults results={this.results[category]} />
          </div>
        ))}
      </VFragment>
    );
  },
};
