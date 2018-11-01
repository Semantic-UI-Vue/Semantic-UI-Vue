import Segment from './Segment.example';
import Raised from './Raised.example';
import Stacked from './Stacked.example';
import StackedTall from './StackedTall.example';
import Piled from './Piled.example';
import Vertical from './Vertical.example';
import Disabled from './Disabled.example';
import Loading from './Loading.example';
import Inverted from './Inverted.example';
import Attached from './Attached.example';
import Attached2 from './Attached2.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Segment',
        description: 'A segment of content',
        component: Segment,
      },
      {
        title: 'Raised',
        description: 'A segment may be formatted to raise above the page',
        component: Raised,
      },
      {
        title: 'Stacked',
        description: 'A segment can be formatted to show it contains multiple pages',
        component: Stacked,
      },
      {
        component: StackedTall,
      },
      {
        title: 'Piled',
        description: 'A segment can be formatted to look like a pile of pages',
        component: Piled,
      },
      {
        title: 'Vertical Segment',
        description: 'A vertical segment formats content to be aligned as part of a vertical group',
        component: Vertical,
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Disabled',
        description: 'A segment may show its content is disabled',
        component: Disabled,
      },
      {
        title: 'Loading',
        description: 'A segment may show its content is being loaded',
        component: Loading,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Inverted',
        description: 'A segment can have its colors inverted for contrast',
        component: Inverted,
      },
      {
        title: 'Attached',
        description: 'A segment can be attached to other content on a page',
        info:
          'Attached segments are designed to be used with other `attached` variations like `attached header` or `attached messages`.',
        component: Attached,
      },
      {
        component: Attached2,
      },
    ],
  },
];
