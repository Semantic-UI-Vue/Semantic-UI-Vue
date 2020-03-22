export default {
  name: 'SuiSearchSimpleResults',
  functional: true,
  props: {
    results: Array,
  },
  render(_, { props, scopedSlots }) {
    return props.results.map(result => scopedSlots.default({ result }));
  },
};
