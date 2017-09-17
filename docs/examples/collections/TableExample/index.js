import Table from './Table.example';
import TableAvatar from './TableAvatar.example';
import TableDefinition from './TableDefinition.example';
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
      {
        title: 'Definition',
        description: 'A table may be formatted to emphasize a first column that defines a rows content',
        component: TableDefinition,
      },
    ],
  },
];
