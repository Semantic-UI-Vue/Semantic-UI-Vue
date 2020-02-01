export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Card',
        description: 'A single card',
        file: 'Card1',
      },
      {
        name: '',
        description: '',
        file: 'Card2',
      },
      {
        name: 'Cards',
        description: 'A group of cards',
        file: 'CardGroup1',
      },
      {
        name: '',
        description: '',
        file: 'CardGroup2',
      },
    ],
  },
  {
    name: 'Content',
    examples: [
      {
        name: 'Content Block',
        description: 'A card can contain blocks of content',
        file: 'ContentBlock',
      },
      {
        name: 'Image',
        description: 'A card can contain an image',
        file: 'ImageCard1',
      },
      {
        name: '',
        description: '',
        file: 'ImageCard2',
      },
      {
        name: 'Header',
        description: 'A card can contain a header',
        file: 'HeaderCard',
      },
      {
        name: 'Metadata',
        description: 'A card can contain content metadata',
        file: 'MetadataCard',
      },
      {
        name: 'Link',
        description:
          'A card can contain links as images, headers, or inside content',
        file: 'LinkCard',
      },
      {
        name: 'Buttons',
        description: 'A card can contain buttons',
        file: 'ButtonsCard',
      },
      {
        name: 'Approval',
        description: 'A card can contain a like or star action',
        file: 'ApprovalCard',
      },
      {
        name: 'Description',
        description:
          'A card can contain a description with one or more paragraphs',
        file: 'DescriptionCard',
      },
      {
        name: 'Extra Content',
        description:
          'A card can contain extra content meant to be formatted separately from the main content',
        file: 'ExtraContentCard',
      },
    ],
  },
  {
    name: 'Variations',
    examples: [
      {
        name: 'Fluid Card',
        description: 'A fluid card takes up the width of its container',
        file: 'FluidCard',
      },
      {
        name: 'Centered Card',
        description: 'A card can center itself inside its container',
        file: 'CenteredCard',
      },
      {
        name: 'Raised Card',
        description: 'A card may be formatted to raise above the page',
        file: 'RaisedCard',
      },
      {
        name: '',
        description: '',
        file: 'RaisedLinkCard',
      },
      {
        name: 'Link Card',
        description:
          'A card can be formatted so that the entire contents link to another page',
        file: 'LinkCard1',
      },
      {
        name: '',
        description: '',
        file: 'LinkCard2',
      },
      {
        name: 'Floated Content',
        description: 'Any content element can be floated left  or right',
        file: 'FloatedContentCard',
      },
      {
        name: 'Text Alignment',
        description:
          'Any element inside a card can have its text alignment specified',
        file: 'TextAlignmentCard',
      },
      {
        name: 'Colored',
        description: 'A card can specify a color',
        file: 'ColoredCard',
      },
      {
        name: 'Column Count',
        description:
          'A group of cards can set how many cards should exist in a row',
        file: 'ColumnCountCard',
      },
      {
        name: 'Stackable',
        description:
          'A group of cards can automatically stack rows to a single column on mobile devices',
        file: 'StackableCard',
      },
      {
        name: 'Doubling',
        description: 'A group of cards can double its column width for mobile',
        file: 'DoublingCard',
      },
    ],
  },
];
