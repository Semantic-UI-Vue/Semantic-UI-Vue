import List from './List.example';
import ListShorthand from './ListShorthand.example';
import ListIcon from './ListIcon.example';
import ListDivided from './ListDivided.example';
import ListTree from './ListTree.example';
import ListInverted from './ListInverted.example';
import Bulleted from './Bulleted.example';
import BulletedHorizontal from './BulletedHorizontal.example';
import Ordered from './Ordered.example';
import OrderedNumber from './OrderedNumber.example';
import Link from './Link.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'List',
        description: 'A list groups related content',
        component: List,
      },
      {
        title: 'Inverted',
        description: 'A list can be inverted to appear on a dark background',
        component: ListInverted,
      },
      {
        description: 'You can also pass an array of items as props',
        component: ListShorthand,
      },
      {
        component: ListIcon,
      },
      {
        component: ListDivided,
      },
      {
        component: ListTree,
      },
      {
        title: 'Bulleted',
        description: 'A list can mark items with a bullet.',
        component: Bulleted,
      },
      {
        component: BulletedHorizontal,
      },
      {
        title: 'Ordered',
        description: 'A list can be ordered numerically.',
        component: Ordered,
      },
      {
        description: 'You can also use an `ol` and `li` to render an ordered list.',
        component: OrderedNumber,
      },
      {
        title: 'Link',
        description: 'A list can be specially formatted for navigation links.',
        component: Link,
      },
    ],
  },
];
