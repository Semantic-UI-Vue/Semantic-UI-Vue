import Table from './Table.example';
import TableAvatar from './TableAvatar.example';
import TableDefinition from './TableDefinition.example';
import TableGit from './TableGit.example';
import TableRating from './TableRating.example';
import TableColored from './TableColored.example';
import TableColoredInverted from './TableColoredInverted.example';
import TableFullWidth from './TableFullWidth.example';

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
      {
        title: 'Colored',
        description: 'A table can be given a color to distinguish it from other tables.',
        component: TableColored,
      },
      {
        title: 'Inverted',
        description: 'A table\'s colors can be inverted.',
        component: TableColoredInverted,
      },
      {
        title: 'Full-Width Header / Footer',
        description: 'A definition table can have a full width header or footer, filling in the gap left by the first column',
        component: TableFullWidth,
      },
    ],
  },
];
