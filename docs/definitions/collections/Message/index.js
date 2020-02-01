export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Message',
        description: 'A basic message',
        file: 'Message',
      },
      {
        name: 'List Message',
        description: 'A message with a list',
        file: 'ListMessage',
      },
      {
        name: 'Icon Message',
        description: 'A message can contain an icon',
        file: 'IconMessage',
      },
      {
        name: 'Dismissable Block',
        description: 'A message that the user can choose to hide',
        file: 'DismissableBlock',
      },
    ],
  },
  {
    name: 'States',
    examples: [
      {
        name: 'Hidden',
        description: 'A message can be hidden.',
        file: 'Hidden',
      },
      {
        name: 'Visible',
        description:
          'A message can be set to visible to force itself to be shown.',
        file: 'Visible',
      },
    ],
  },
];
