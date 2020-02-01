export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Feed',
        description: 'A feed',
        file: 'Feed',
      },
      {
        description:
          'You can also pass an array of events to generate the markup',
        file: 'FeedShorthand',
      },
    ],
  },
  {
    name: 'Content',
    examples: [
      {
        name: 'Image Label',
        description: 'An event can contain an image label',
        file: 'ImageLabel',
      },
      {
        description: 'You can do the same using shorthands',
        file: 'ImageLabelShorthand',
      },
      {
        name: 'Icon Label',
        description: 'An event can contain an icon label',
        file: 'IconLabel',
      },
      {
        description: 'You can do the same using shorthands',
        file: 'IconLabelShorthand',
      },
      {
        name: 'Content Date',
        description: 'Event content can contain a date',
        file: 'ContentDate',
      },
      {
        description: 'You can do the same using shorthands',
        file: 'ContentDateShorthand',
      },
      {
        name: 'Summary Date',
        description: 'An event summary can contain a date',
        file: 'SummaryDate',
      },
      {
        description: 'You can do the same using shorthands',
        file: 'SummaryDateShorthand',
      },
      {
        name: 'Extra Images',
        description: 'An event can contain extra images.',
        file: 'ExtraImages',
      },
      {
        description: 'You can do the same using shorthands',
        file: 'ExtraImagesShorthand',
      },
      {
        name: 'Extra Text',
        description: 'An event can contain extra text.',
        file: 'ExtraText',
      },
      {
        description: 'You can do the same using shorthands',
        file: 'ExtraTextShorthand',
      },
    ],
  },
  {
    name: 'Variations',
    examples: [
      {
        name: 'Size',
        description: 'A feed can have different sizes',
        file: 'SizeSmall',
      },
      {
        file: 'SizeLarge',
      },
    ],
  },
];
