export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Page Headers',
        description:
          'Headers may be oriented to give the hierarchy of a section in the context of the page.',
        file: 'PageHeaders',
      },
      {
        name: 'Content Headers',
        description:
          'Headers may be oriented to give the importance of a section.',
        file: 'ContentHeaders',
      },
      {
        name: 'Icon Headers',
        description: 'A header can be formatted to emphasize an icon.',
        file: 'IconHeaders',
      },
      {
        file: 'IconFriends',
      },
      {
        name: 'Sub Headers',
        description:
          'Headers may be formatted to label smaller or de-emphasized content.',
        file: 'SubHeader',
      },
    ],
  },
  {
    name: 'Content',
    examples: [
      {
        name: 'Image',
        description: 'A header may contain an image.',
        file: 'ImageAvatar',
      },
      {
        file: 'ImageLearnMore',
      },
      {
        name: 'Icon',
        description: 'A header may contain an icon.',
        file: 'Icon',
      },
      {
        file: 'IconSubheader',
      },
      {
        name: 'Subheader',
        description: 'Headers may contain subheaders.',
        file: 'SubheaderContent',
      },
    ],
  },
  {
    name: 'States',
    examples: [
      {
        name: 'Disabled',
        description: 'A header can show that it is inactive.',
        file: 'Disabled',
      },
    ],
  },
  {
    name: 'Variations',
    examples: [
      {
        name: 'Dividing',
        description:
          'A header can be formatted to divide itself from the content below it.',
        file: 'Dividing',
      },
      {
        name: 'Block',
        description:
          'A header can be formatted to appear inside a content block.',
        file: 'Block',
      },
      {
        name: 'Attached',
        description:
          'A header can be attached to other content, like a segment.',
        file: 'Attached',
      },
      {
        name: 'Floating',
        description: 'A header can sit to the left or right of other content.',
        file: 'Floating',
      },
      {
        name: 'Text Alignment',
        description: 'A header can have its text aligned to a side.',
        file: 'TextAlignment',
      },
      {
        name: 'Colored',
        description: 'A header can be formatted with different colors.',
        file: 'Colored',
      },
      {
        name: 'Inverted',
        description: 'A header can have its colors inverted for contrast.',
        file: 'Inverted',
      },
    ],
  },
];
