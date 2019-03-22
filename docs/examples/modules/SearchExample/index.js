import SearchStandard from './Search.standard.example';
import SearchMinCharacters from './Search.minCharacters.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Search',
        description: 'A basic search element',
        component: SearchStandard,
      },
      {
        title: 'Min characters',
        description: 'An example of minimal characters to search requirement (min 3)',
        component: SearchMinCharacters,
      },
    ],
  },
];
