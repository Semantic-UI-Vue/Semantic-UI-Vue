export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Breadcrumb',
        description: 'A standard breadcrumb',
        file: 'Breadcrumb',
      },
      {
        file: 'BreadcrumbAngle',
      },
    ],
  },
  {
    name: 'Content',
    examples: [
      {
        name: 'Divider',
        description:
          'A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text',
        file: 'Divider',
      },
      {
        file: 'DividerArrow',
      },
      {
        name: 'Section',
        description:
          'A breadcrumb can contain sections that can either be formatted as a link or text',
        file: 'Section',
      },
      {
        name: 'Link',
        description: 'A section may be linkable or contain a link',
        file: 'Link',
      },
    ],
  },
  {
    name: 'Variations',
    examples: [
      {
        name: 'Size',
        description: 'A breadcrumb can vary in size',
        file: 'Size',
      },
    ],
  },
];
