import Grid from './Grid.example';
import Divided from './Divided.example';
import VerticallyDivided from './VerticallyDivided.example';
import Celled from './Celled.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Grid',
        description: 'A basic grid',
        component: Grid,
      },
      {
        title: 'Divided',
        description: 'A grid can have dividers between its columns',
        component: Divided,
      },
      {
        title: 'Vertically Divided',
        description: 'A grid can have dividers between rows',
        component: VerticallyDivided,
      },
      {
        title: 'Celled',
        description: 'A grid can have rows divided into cells',
        component: Celled,
      },
    ],
  },
];
