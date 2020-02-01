export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Fade',
        description: 'An element can disappear to reveal content below',
        file: 'Fade',
      },
      {
        name: 'Move',
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
        name: 'Rotate',
        description: 'An element can rotate to reveal content below.',
        file: 'RotateRight',
      },
      {
        file: 'RotateLeft',
      },
    ],
  },
  {
    name: 'Content',
    examples: [
      {
        name: 'Visible content',
        description:
          'A reveal may contain content that is visible before interaction.',
        file: 'VisibleContent',
      },
      {
        name: 'Hidden content',
        description:
          'A reveal may contain content that is hidden before user interaction.',
        file: 'HiddenContent',
      },
    ],
  },
  {
    name: 'Variations',
    examples: [
      {
        name: 'Instant',
        description: 'An element can show its content without delay.',
        file: 'Instant',
      },
    ],
  },
  {
    name: 'States',
    examples: [
      {
        name: 'Active',
        description: 'An active reveal displays its hidden content.',
        file: 'Active',
      },
      {
        name: 'Disabled',
        description: 'A disabled reveal will not animate when hovered.',
        file: 'Disabled',
      },
    ],
  },
];
