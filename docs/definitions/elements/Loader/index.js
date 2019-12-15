
export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Loader',
        description: 'A loader',
        file: 'Loader',
      },
      {
        title: 'Text Loader',
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
    title: 'States',
    examples: [
      {
        title: 'Indeterminate',
        description: "A loader can show it's unsure of how long a task will take",
        file: 'Indeterminate',
      },
      {
        title: 'Active',
        description: 'A loader can be active or visible',
        info: 'An active loader may not be clearly visible without using a `ui dimmer`',
        file: 'Active',
      },
      {
        title: 'Disabled',
        description: 'A loader can be disabled or hidden',
        file: 'Disabled',
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Inline',
        description: 'Loaders can appear inline with content',
        file: 'Inline',
      },
      {
        title: 'Inline Center',
        description: 'Loaders can appear inline centered with content',
        file: 'InlineCentered',
      },
      {
        title: 'Size',
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
        title: 'Inverted',
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
