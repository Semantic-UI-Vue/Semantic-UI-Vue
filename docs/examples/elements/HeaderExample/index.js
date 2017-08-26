import PageHeaders from './PageHeaders.example';
import ContentHeaders from './ContentHeaders.example';
import IconHeaders from './IconHeaders.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Page Headers',
        description: 'Headers may be oriented to give the hierarchy of a section in the context of the page.',
        component: PageHeaders,
      },
      {
        title: 'Content Headers',
        description: 'Headers may be oriented to give the importance of a section.',
        component: ContentHeaders,
      },
      {
        title: 'Icon Headers',
        description: 'A header can be formatted to emphasize an icon.',
        component: IconHeaders,
      },
    ],
  },
];
