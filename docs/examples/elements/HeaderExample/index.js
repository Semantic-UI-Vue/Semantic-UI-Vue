import Divider from './Divider.example';
import FittedDivider from './FittedDivider.example';
import HiddenDivider from './HiddenDivider.example';
import VerticalDivider from './VerticalDivider.example';
import VerticalDivider2 from './VerticalDivider2.example';
import HorizontalDivider from './HorizontalDivider.example';
import HorizontalDivider2 from './HorizontalDivider2.example';
import InvertedDivider from './InvertedDivider.example';
import SectionDivider from './SectionDivider.example';
import ClearingDivider from './ClearingDivider.example';

export default [
  {
    title: 'Types',
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
    title: 'Variations',
    examples: [
      {
        title: 'Inverted',
        description: 'A divider can have its colors inverted',
        component: InvertedDivider,
      },
      {
        title: 'Fitted',
        description: 'A divider can be fitted, without any space above or below it',
        component: FittedDivider,
      },
      {
        title: 'Hidden',
        description: 'A hidden divider divides content without creating a dividing line',
        component: HiddenDivider,
      },
      {
        title: 'Section',
        description: 'A divider can provide greater margins to divide sections of content',
        component: SectionDivider,
      },
      {
        title: 'Clearing',
        description: 'A divider can clear the contents above it',
        component: ClearingDivider,
      },
    ],
  },
];
