export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Table',
        description: 'A standard table',
        file: 'Table',
      },
      {
        file: 'TableRating',
      },
      {
        file: 'TableAvatar',
      },
      {
        file: 'TableGit',
      },
      {
        title: 'Definition',
        description: 'A table may be formatted to emphasize a first column that defines a rows content',
        file: 'TableDefinition',
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Positive / Negative',
        description: 'A cell or row may let a user know whether a value is good or bad',
        file: 'TablePositiveNegative',
      },
      {
        title: 'Error',
        description: 'A cell or row may call attention to an error or a negative value',
        file: 'TableError',
      },
      {
        title: 'Warning',
        description: 'A cell or row may warn a user',
        file: 'TableWarning',
      },
      {
        title: 'Active',
        description: 'A cell or row can be active or selected by a user',
        file: 'TableActive',
      },
      {
        title: 'Disabled',
        description: 'A cell can be disabled',
        file: 'TableDisabled',
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Single Line',
        description: 'A table can specify that its cell contents should remain on a single line, and not wrap.',
        file: 'TableSingleLine',
      },
      {
        title: 'Fixed',
        description: 'A table can use "table-layout: fixed" a special faster form of table rendering that does not resize table cells based on content.',
        file: 'TableFixed',
      },
      {
        info: 'Fixed single line tables will automatically ensure content that does not fit in a single line will receive "..." ellipsis',
        file: 'TableFixedSingleLine',
      },
      {
        title: 'Stacking',
        description: 'A table can specify how it stacks table content responsively',
        file: 'TableStacking',
      },
      {
        title: 'Selectable Row',
        description: 'A table can have its rows appear selectable',
        file: 'TableSelectableRow',
      },
      {
        file: 'TableSelectableRowInverted',
      },
      {
        title: 'Selectable Cell',
        description: 'A table cell can be selectable',
        info: 'Using an `a` link inside a selectable cell will automatically make the hit box the entire cell area. By default links will inherit their cell color.',
        file: 'TableSelectableCell',
      },
      {
        title: 'Vertical Alignment',
        description: 'A table header, row, or cell can adjust its vertical alignment',
        file: 'TableVerticalAlignment',
      },
      {
        title: 'Text Alignment',
        description: 'A table header, row, or cell can adjust its text alignment',
        file: 'TableTextAlignment',
      },
      {
        title: 'Striped',
        description: 'A table can stripe alternate rows of content with a darker color to increase contrast',
        file: 'TableStriped',
      },
      {
        title: 'Celled',
        description: 'A table may be divided each row into separate cells',
        file: 'TableCelled',
      },
      {
        title: 'Basic',
        description: 'A table can reduce its complexity to increase readability.',
        file: 'TableBasic',
      },
      {
        file: 'TableBasicVery',
      },
      {
        title: 'Collapsing Cell',
        info: 'To ensure icons don\'t wrap to a separate line you must either specify collapsing on the widest row in the collapsing column, or on all rows',
        description: 'A cell can be collapsing so that it only uses as much space as required',
        file: 'TableCollapsingCell',
      },
      {
        title: 'Column Width',
        info: 'Tables use a 16 column grid similar to ui grid',
        description: 'A table can specify the width of individual columns independently.',
        file: 'TableColumnWidth',
      },
      {
        title: 'Column Count',
        description: 'A table can specify its column count to divide its content evenly',
        file: 'TableColumnCount',
      },
      {
        title: 'Collapsing',
        description: 'A table can be collapsing, taking up only as much space as its rows.',
        file: 'TableCollapsing',
      },
      {
        title: 'Colored',
        description: 'A table can be given a color to distinguish it from other tables.',
        file: 'TableColored',
      },
      {
        title: 'Inverted',
        description: 'A table\'s colors can be inverted.',
        file: 'TableColoredInverted',
      },
      {
        title: 'Full-Width Header / Footer',
        description: 'A definition table can have a full width header or footer, filling in the gap left by the first column',
        file: 'TableFullWidth',
      },
      {
        title: 'Padded',
        description: 'A table may sometimes need to be more padded for legibility',
        file: 'TablePadded',
      },
      {
        file: 'TablePaddedVery',
      },
      {
        title: 'Compact',
        description: 'A table may sometimes need to be more compact to make more rows visible at a time',
        file: 'TableCompact',
      },
      {
        file: 'TableCompactVery',
      },
      {
        title: 'Size',
        description: 'A table can also be small or large',
        file: 'TableSizeSmall',
      },
      {
        file: 'TableSizeLarge',
      },
    ],
  },
];
