export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Fade',
        description: 'An element can disappear to reveal content below',
        file: 'Fade',
      },
      {
        title: 'Move',
        description: 'An element can move in a direction to reveal content.',
        file: 'MoveLeft',
      },
      {
        file: 'MoveRight',
      },
      {
        file: 'MoveUp',
      },
      {
        file: 'MoveDown',
      },
      {
        title: 'Rotate',
        description: 'An element can rotate to reveal content below.',
        file: 'RotateRight',
      },
      {
        file: 'RotateLeft',
      },
    ],
  },
  {
    title: 'Content',
    examples: [
      {
        title: 'Visible content',
        description: 'A reveal may contain content that is visible before interaction.',
        file: 'VisibleContent',
      }, {
        title: 'Hidden content',
        description: 'A reveal may contain content that is hidden before user interaction.',
        file: 'HiddenContent',
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Instant',
        description: 'An element can show its content without delay.',
        file: 'Instant',
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Active',
        description: 'An active reveal displays its hidden content.',
        file: 'Active',
      },
      {
        title: 'Disabled',
        description: 'A disabled reveal will not animate when hovered.',
        file: 'Disabled',
      },
    ],
  },
];
