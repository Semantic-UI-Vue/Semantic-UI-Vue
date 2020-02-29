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
        name: 'SearchInput',
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
      // {
      //   name: 'Category',
      //   description: 'A search can display results ordered by categories',
      //   file: 'SearchCategory',
      // },
    ],
  },
];
