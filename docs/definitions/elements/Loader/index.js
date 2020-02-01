export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Loader',
        description: 'A loader',
        file: 'Loader',
      },
      {
        name: 'Text Loader',
        description: 'A loader can contain text',
        file: 'TextLoader',
      },
      {
        description: 'A loader can contain text with shorthand prop',
        file: 'TextLoaderInverted',
      },
    ],
  },
  {
    name: 'States',
    examples: [
      {
        name: 'Indeterminate',
        description:
          "A loader can show it's unsure of how long a task will take",
        file: 'Indeterminate',
      },
      {
        name: 'Active',
        description: 'A loader can be active or visible',
        info:
          'An active loader may not be clearly visible without using a `ui dimmer`',
        file: 'Active',
      },
      {
        name: 'Disabled',
        description: 'A loader can be disabled or hidden',
        file: 'Disabled',
      },
    ],
  },
  {
    name: 'Variations',
    examples: [
      {
        name: 'Inline',
        description: 'Loaders can appear inline with content',
        file: 'Inline',
      },
      {
        name: 'Inline Center',
        description: 'Loaders can appear inline centered with content',
        file: 'InlineCentered',
      },
      {
        name: 'Size',
        description: 'Loaders can have different sizes',
        file: 'SizeMini',
      },
      {
        description: 'Tiny',
        file: 'SizeTiny',
      },
      {
        description: 'Small',
        file: 'SizeSmall',
      },
      {
        description: 'Medium',
        file: 'SizeMedium',
      },
      {
        description: 'Large',
        file: 'SizeLarge',
      },
      {
        description: 'Big',
        file: 'SizeBig',
      },
      {
        description: 'Huge',
        file: 'SizeHuge',
      },
      {
        description: 'Massive',
        file: 'SizeMassive',
      },
      {
        name: 'Inverted',
        description: 'Loaders can have their colors inverted.',
        file: 'Inverted',
      },
      {
        info: 'Loaders will automatically be inverted inside `inverted dimmer`',
        file: 'Inverted2',
      },
    ],
  },
];
