export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Grid',
        description: 'A basic grid',
        file: 'Grid',
      },
      {
        name: 'Divided',
        description: 'A grid can have dividers between its columns',
        file: 'Divided',
      },
      {
        name: 'Vertically Divided',
        description: 'A grid can have dividers between rows',
        file: 'VerticallyDivided',
      },
      {
        name: 'Celled',
        description: 'A grid can have rows divided into cells',
        file: 'Celled',
      },
      {
        name: 'Internally Celled',
        description:
          'A grid can have rows divisions only between internal rows.',
        file: 'InternallyCelled',
      },
    ],
  },
  {
    name: 'Content',
    examples: [
      {
        name: 'Rows',
        description: 'A row is a horizontal grouping of columns.',
        file: 'Rows',
      },
      {
        name: 'Columns',
        description:
          'Columns each contain gutters giving them equal spacing from other columns.',
        file: 'Columns',
      },
    ],
  },
  {
    name: 'Variations',
    examples: [
      {
        name: 'Stretched',
        description:
          'A row can automatically resize all elements to split the available width evenly.',
        file: 'Stretched',
      },
    ],
  },
];
