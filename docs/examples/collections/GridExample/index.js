import GridExample from './Grid.example';
import DividedExample from './Divided.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Grid',
        description: 'A basic grid',
        component: GridExample,
      },
      {
        title: 'Divided',
        description: 'A grid can have dividers between its columns',
        component: DividedExample,
      },
    ],
  },
];
