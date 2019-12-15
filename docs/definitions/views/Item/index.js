export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Items',
        description: 'A group of items',
        file: 'ItemGroup',
      },
    ],
  },
  {
    name: 'Content',
    examples: [
      {
        name: 'Image',
        description: 'An item can contain an image',
        file: 'ContentImage',
      },
      {
        name: 'Content',
        description: 'An item can contain content',
        file: 'ContentContent',
      },
      {
        name: 'Header',
        description: 'An item can contain a header',
        file: 'ContentHeader',
      },
      {
        name: 'Metadata',
        description: 'An item can contain content metadata',
        file: 'ContentMeta',
      },
    ],
  },
];
