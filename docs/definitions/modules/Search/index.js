export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Search',
        description: 'A basic search element',
        file: 'SearchStandard',
      },
      {
        file: 'SearchInput',
      },
      {
        name: 'Category',
        description:
          'A search can display results from remote content ordered by categories.',
        file: 'SearchCategory',
      },
      {
        name: 'Local Search',
        description:
          'A search can look for results inside a static local source.',
        file: 'SearchLocal',
      },
    ],
  },
  {
    name: 'States',
    examples: [
      {
        name: 'Loading',
        description: 'A search can show a loading indicator.',
        file: 'SearchLoading',
      },
    ],
  },
];
