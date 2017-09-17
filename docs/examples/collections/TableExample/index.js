import Table from './Table.example';
import TableRating from './TableRating.example';
import TableAvatar from './TableAvatar.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Table',
        description: 'A standard table',
        component: Table,
      },
      {
        component: TableRating,
      },
      {
        component: TableAvatar,
      },
    ],
  },
];
