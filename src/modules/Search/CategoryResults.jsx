import SimpleResults from './SimpleResults';

export default {
  name: 'SuiSearchCategoryResults',
  functional: true,
  props: {
    results: Object,
  },
  render(_, { props, scopedSlots }) {
    const categories = Object.keys(props.results);
    return categories.map(category => (
      <div class="category" key={category}>
        <div class="name">{props.results[category].name}</div>
        <div class="results">
          <SimpleResults
            results={props.results[category].results}
            {...{ scopedSlots: { default: scopedSlots.default } }}
          />
        </div>
      </div>
    ));
  },
};
