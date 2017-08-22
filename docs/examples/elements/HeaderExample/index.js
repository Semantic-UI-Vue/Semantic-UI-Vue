import Divider from './Divider.example';
import VerticalDivider from './VerticalDivider.example';
import VerticalDivider2 from './VerticalDivider2.example';
import HorizontalDivider from './HorizontalDivider.example';
import HorizontalDivider2 from './HorizontalDivider2.example';
import InvertedDivider from './InvertedDivider.example';

export default [
  {
    section: 'Types',
    examples: [
      {
        title: 'Divider',
        description: 'A standard divider',
        component: Divider,
      },
      {
        title: 'Vertical Divider',
        description: 'A divider can segment content vertically',
        component: VerticalDivider,
      },
      {
        component: VerticalDivider2,
      },
      {
        title: 'Horizontal Divider',
        description: 'A divider can segment content horizontally',
        component: HorizontalDivider,
      },
      {
        component: HorizontalDivider2,
      },
    ],
  },
  {
    section: 'Variations',
    examples: [
      {
        name: 'Inverted',
        description: 'A divider can have its colors inverted',
        component: InvertedDivider,
      },
    ],
  },
];
