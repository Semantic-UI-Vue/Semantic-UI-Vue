import VFragment from '../../lib/VFragment';
import Result from './Result';

export default {
  name: 'SuiSearchSimpleResults',
  props: {
    results: Array,
  },
  render() {
    return (
      <VFragment>
        {this.results.map(result =>
          this.$slots.result ? (
            this.$slots.result({
              result,
            })
          ) : (
            <Result {...{ props: result }} />
          ),
        )}
      </VFragment>
    );
  },
};
