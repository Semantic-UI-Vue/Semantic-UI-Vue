import SearchStandard from './SearchStandard.example';
import SearchMinCharacters from './SearchMinCharacters.example';
import SearchCategory from './SearchCategory.example';

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
      {
        title: 'Category',
        description: 'A search can display results ordered by categories',
        component: SearchCategory,
      },
    ],
  },
];
