import Grid from './Grid.example';
import Divided from './Divided.example';
import VerticallyDivided from './VerticallyDivided.example';
import Celled from './Celled.example';
import InternallyCelled from './InternallyCelled.example';
import Stretched from './Stretched.example';
import Rows from './Rows.example';
import Columns from './Columns.example';

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
      {
        title: 'Internally Celled',
        description: 'A grid can have rows divisions only between internal rows.',
        component: InternallyCelled,
      },
    ],
  },
  {
    title: 'Content',
    examples: [
      {
        title: 'Rows',
        description: 'A row is a horizontal grouping of columns.',
        component: Rows,
      },
      {
        title: 'Columns',
        description: 'Columns each contain gutters giving them equal spacing from other columns.',
        component: Columns,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Stretched',
        description: 'A row can automatically resize all elements to split the available width evenly.',
        component: Stretched,
      },
    ],
  },
];
