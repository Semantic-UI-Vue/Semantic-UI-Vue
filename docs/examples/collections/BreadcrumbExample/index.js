import Breadcrumb from './Breadcrumb.example';
import BreadcrumbAngle from './BreadcrumbAngle.example';
import Divider from './Divider.example';
import DividerArrow from './DividerArrow.example';
import Section from './Section.example';
import Link from './Link.example';
import Size from './Size.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Breadcrumb',
        description: 'A standard breadcrumb',
        component: Breadcrumb,
      },
      {
        component: BreadcrumbAngle,
      },
    ],
  },
  {
    title: 'Content',
    examples: [
      {
        title: 'Divider',
        description: 'A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text',
        component: Divider,
      },
      {
        component: DividerArrow,
      },
      {
        title: 'Section',
        description: 'A breadcrumb can contain sections that can either be formatted as a link or text',
        component: Section,
      },
      {
        title: 'Link',
        description: 'A section may be linkable or contain a link',
        component: Link,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Size',
        description: 'A breadcrumb can vary in size',
        component: Size,
      },
    ],
  },
];
