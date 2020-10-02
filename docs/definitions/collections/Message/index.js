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
  {
    name: 'Variations',
    examples: [
      {
        name: 'Floating',
        description: 'A message can float above content that it is related to.',
        file: 'Floating',
      },
      {
        name: 'Compact',
        description: 'A message can take up only the width of its content.',
        file: 'Compact',
      },
      {
        name: 'Attached',
        description:
          'A message can be formatted to attach itself to other content.',
        file: 'Attached',
      },
      {
        name: 'Warning',
        description: 'A message may be formatted to display warning messages.',
        file: 'Warning',
      },
      {
        name: 'Info',
        description: 'A message may be formatted to display infomation.',
        file: 'Info',
      },
      {
        name: 'Positive / Success',
        description:
          'A message may be formatted to display a positive message.',
        file: 'Positive',
      },
      {
        file: 'Positive2',
      },
      {
        name: 'Negative / Error',
        description:
          'A message may be formatted to display a negative message.',
        file: 'Negative',
      },
      {
        file: 'Negative2',
      },
      {
        name: 'Colored',
        description: 'A message can be formatted to be different colors.',
        file: 'Colored',
      },
      {
        name: 'Size',
        description: 'A message can have different sizes.',
        file: 'Size',
      },
    ],
  },
];
