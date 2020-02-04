export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'YouTube',
        description: 'An embed can be used to display YouTube Content',
        file: 'YouTube',
      },
      {
        name: 'Vimeo',
        description: 'An embed can be used to display Vimeo content',
        file: 'Vimeo',
      },
      {
        name: 'Custom Content',
        description: 'An embed can display any web content',
        info:
          'Embeds use an intrinsic aspect ratios to embed content responsively.' +
          ' Content will preserve their intrinsic aspect ratio for all browser sizes responsively',
        file: 'CustomContent',
      },
    ],
  },
  {
    name: 'States',
    examples: [
      {
        name: 'Active',
        description: 'An embed can be active',
        file: 'Active',
      },
    ],
  },
  {
    name: 'Variations',
    examples: [
      {
        name: 'Aspect Ratio',
        description: 'An embed can specify an alternative aspect ratio',
        file: 'AspectRatio',
      },
    ],
  },
  {
    name: 'Usage',
    examples: [
      {
        name: 'Source settings',
        description: 'Settings to configure video behavior',
        file: 'SourceSettings',
      },
      {
        name: 'Iframe',
        description: 'You can pass props to a shorthand',
        file: 'Iframe',
      },
    ],
  },
];
