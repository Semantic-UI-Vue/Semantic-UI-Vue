import List from './List.example';
import ListShorthand from './ListShorthand.example';
import ListIcon from './ListIcon.example';
import ListDivided from './ListDivided.example';
import ListTree from './ListTree.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'List',
        description: 'A list groups related content',
        component: List,
      },
      {
        description: 'You can also pass an array of items as props',
        component: ListShorthand,
      },
      {
        component: ListIcon,
      },
      {
        component: ListDivided,
      },
      {
        component: ListTree,
      },
    ],
  },
];
