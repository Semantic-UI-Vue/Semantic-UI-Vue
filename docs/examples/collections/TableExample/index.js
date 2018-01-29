import Table from './Table.example';
import TableAvatar from './TableAvatar.example';
import TableDefinition from './TableDefinition.example';
import TableGit from './TableGit.example';
import TableRating from './TableRating.example';
import TablePositiveNegative from './TablePositiveNegative.example';
import TableError from './TableError.example';
import TableWarning from './TableWarning.example';
import TableActive from './TableActive.example';
import TableDisabled from './TableDisabled.example';
import TableSingleLine from './TableSingleLine.example';
import TableFixed from './TableFixed.example';
import TableFixedSingleLine from './TableFixedSingleLine.example';
import TableStacking from './TableStacking.example';
import TableSelectableRow from './TableSelectableRow.example';
import TableSelectableRowInverted from './TableSelectableRowInverted.example';
import TableSelectableCell from './TableSelectableCell.example';
import TableVerticalAlignment from './TableVerticalAlignment.example';
import TableTextAlignment from './TableTextAlignment.example';
import TableStriped from './TableStriped.example';
import TableCelled from './TableCelled.example';
import TableBasic from './TableBasic.example';
import TableBasicVery from './TableBasicVery.example';
import TableCollapsingCell from './TableCollapsingCell.example';
import TableColumnCount from './TableColumnCount.example';
import TableColumnWidth from './TableColumnWidth.example';
import TableCollapsing from './TableCollapsing.example';
import TableColored from './TableColored.example';
import TableColoredInverted from './TableColoredInverted.example';
import TableFullWidth from './TableFullWidth.example';
import TablePadded from './TablePadded.example';
import TablePaddedVery from './TablePaddedVery.example';
import TableCompact from './TableCompact.example';
import TableCompactVery from './TableCompactVery.example';
import TableSizeSmall from './TableSizeSmall.example';
import TableSizeLarge from './TableSizeLarge.example';

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
  {
    title: 'States',
    examples: [
      {
        title: 'Positive / Negative',
        description: 'A cell or row may let a user know whether a value is good or bad',
        component: TablePositiveNegative,
      },
      {
        title: 'Cells',
      },
      {
        title: 'Error',
        description: 'A cell or row may call attention to an error or a negative value',
        component: TableError,
      },
      {
        title: 'Warning',
        description: 'A cell or row may warn a user',
        component: TableWarning,
      },
      {
        title: 'Active',
        description: 'A cell or row can be active or selected by a user',
        component: TableActive,
      },
      {
        title: 'Disabled',
        description: 'A cell can be disabled',
        component: TableDisabled,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Single Line',
        description: 'A table can specify that its cell contents should remain on a single line, and not wrap.',
        component: TableSingleLine,
      },
      {
        title: 'Fixed',
        description: 'A table can use "table-layout: fixed" a special faster form of table rendering that does not resize table cells based on content.',
        component: TableFixed,
      },
      {
        info: 'Fixed single line tables will automatically ensure content that does not fit in a single line will receive "..." ellipsis',
        component: TableFixedSingleLine,
      },
      {
        title: 'Stacking',
        description: 'A table can specify how it stacks table content responsively',
        component: TableStacking,
      },
      {
        title: 'Selectable Row',
        description: 'A table can have its rows appear selectable',
        component: TableSelectableRow,
      },
      {
        component: TableSelectableRowInverted,
      },
      {
        title: 'Selectable Cell',
        description: 'A table cell can be selectable',
        info: 'Using an `a` link inside a selectable cell will automatically make the hit box the entire cell area. By default links will inherit their cell color.',
        component: TableSelectableCell,
      },
      {
        title: 'Vertical Alignment',
        description: 'A table header, row, or cell can adjust its vertical alignment',
        component: TableVerticalAlignment,
      },
      {
        title: 'Text Alignment',
        description: 'A table header, row, or cell can adjust its text alignment',
        component: TableTextAlignment,
      },
      {
        title: 'Striped',
        description: 'A table can stripe alternate rows of content with a darker color to increase contrast',
        component: TableStriped,
      },
      {
        title: 'Celled',
        description: 'A table may be divided each row into separate cells',
        component: TableCelled,
      },
      {
        title: 'Basic',
        description: 'A table can reduce its complexity to increase readability.',
        component: TableBasic,
      },
      {
        component: TableBasicVery,
      },
      {
        title: 'Collapsing Cell',
        info: 'To ensure icons don\'t wrap to a separate line you must either specify collapsing on the widest row in the collapsing column, or on all rows',
        description: 'A cell can be collapsing so that it only uses as much space as required',
        component: TableCollapsingCell,
      },
      {
        title: 'Column Width',
        info: 'Tables use a 16 column grid similar to ui grid',
        description: 'A table can specify the width of individual columns independently.',
        component: TableColumnWidth,
      },
      {
        title: 'Column Count',
        description: 'A table can specify its column count to divide its content evenly',
        component: TableColumnCount,
      },
      {
        title: 'Collapsing',
        description: 'A table can be collapsing, taking up only as much space as its rows.',
        component: TableCollapsing,
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
      {
        title: 'Padded',
        description: 'A table may sometimes need to be more padded for legibility',
        component: TablePadded,
      },
      {
        component: TablePaddedVery,
      },
      {
        title: 'Compact',
        description: 'A table may sometimes need to be more compact to make more rows visible at a time',
        component: TableCompact,
      },
      {
        component: TableCompactVery,
      },
      {
        title: 'Size',
        description: 'A table can also be small or large',
        component: TableSizeSmall,
      },
      {
        component: TableSizeLarge,
      },
    ],
  },
];
