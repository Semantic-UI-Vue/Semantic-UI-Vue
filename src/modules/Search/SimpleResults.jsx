import Result from './Result';

export default {
  name: 'SuiSearchSimpleResults',
  functional: true,
  props: {
    results: Array,
  },
  render(_, { props, slots }) {
    return props.results.map(result =>
      slots.result ? (
        slots.result({
          result,
        })
      ) : (
        <Result {...{ props: result }} />
      ),
    );
  },
};
