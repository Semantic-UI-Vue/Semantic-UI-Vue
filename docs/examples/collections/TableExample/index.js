import Table from './Table.example';
import TableAvatar from './TableAvatar.example';
import TableGit from './TableGit.example';
import TableRating from './TableRating.example';

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
      {
        component: TableGit,
      },
    ],
  },
];
