export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Segment',
        description: 'A segment of content',
        file: 'Segment',
      },
      {
        name: 'Raised',
        description: 'A segment may be formatted to raise above the page',
        file: 'Raised',
      },
      {
        name: 'Stacked',
        description:
          'A segment can be formatted to show it contains multiple pages',
        file: 'Stacked',
      },
      {
        file: 'StackedTall',
      },
      {
        name: 'Piled',
        description: 'A segment can be formatted to look like a pile of pages',
        file: 'Piled',
      },
      {
        name: 'Vertical Segment',
        description:
          'A vertical segment formats content to be aligned as part of a vertical group',
        file: 'Vertical',
      },
    ],
  },
  {
    name: 'States',
    examples: [
      {
        name: 'Disabled',
        description: 'A segment may show its content is disabled',
        file: 'Disabled',
      },
      {
        name: 'Loading',
        description: 'A segment may show its content is being loaded',
        file: 'Loading',
      },
    ],
  },
  {
    name: 'Variations',
    examples: [
      {
        name: 'Inverted',
        description: 'A segment can have its colors inverted for contrast',
        file: 'Inverted',
      },
      {
        name: 'Attached',
        description: 'A segment can be attached to other content on a page',
        info:
          'Attached segments are designed to be used with other `attached` variations like `attached header` or `attached messages`.',
        file: 'Attached',
      },
      {
        file: 'Attached2',
      },
      {
        name: 'Padded',
        description: 'A segment can increase its padding',
        file: 'Padded',
      },
      {
        file: 'Padded2',
      },
      {
        name: 'Compact',
        description: 'A segment may take up only as much space as is necessary',
        file: 'Compact',
      },
      {
        name: 'Colored',
        description: 'A segment can be colored',
        file: 'Color',
      },
      {
        description: 'These colors can be inverted',
        file: 'Color2',
      },
      {
        name: 'Emphasis',
        description:
          'A segment can be formatted to appear more or less noticeable',
        file: 'Emphasis',
      },
      {
        description: 'Inverted colors may also be more or less noticeable',
        file: 'Emphasis2',
      },
      {
        file: 'Emphasis3',
      },
      {
        name: 'Circular',
        info:
          'A circular segment will most likely have to have its content manually sized to be equal width and height, otherwise it will flow to the size of your content',
        description: 'A segment can be circular',
        file: 'Circular',
      },
      {
        name: 'Clearing',
        description: 'A segment can clear floated content',
        file: 'Clearing',
      },
      {
        name: 'Floated',
        description:
          'A segment can appear to the left or right of other content',
        file: 'Floated',
      },
      {
        name: 'TextAlign',
        description: 'A segment can have its text aligned to a side',
        file: 'TextAlign',
      },
      {
        name: 'Basic',
        description: 'A basic segment has no special formatting',
        file: 'Basic',
      },
    ],
  },
  {
    name: 'Groups',
    examples: [
      {
        name: 'Segments',
        description: 'A group of segments',
        file: 'Segments',
      },
      {
        name: 'Nested Segments',
        description:
          'A group of segments can be nested in another group of segments',
        file: 'NestedSegments',
      },
      {
        name: 'Horizontal Segments',
        description: 'A segment group can appear horizontally',
        file: 'HorizontalSegments',
      },
      {
        name: 'Raised Segments',
        description: 'A group of segments can be raised',
        file: 'RaisedSegments',
      },
      {
        name: 'Stacked Segments',
        description: 'A group of segments can be stacked',
        file: 'StackedSegments',
      },
      {
        name: 'Piled Segments',
        description: 'A group of segments can be piled',
        file: 'PiledSegments',
      },
    ],
  },
];
