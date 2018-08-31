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
import Description from './Description.example';
import Header from './Header.example';
import Icon from './Icon.example';
import Image from './Image.example';
import Item from './Item.example';
import LinkContent from './LinkContent.example';
import LinkDescription from './LinkDescription.example';

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
  {
    title: 'Content',
    examples: [
      {
        title: 'Item',
        description: 'A list item can contain a set of items.',
        component: Item,
      },
      {
        title: 'Icon',
        description: 'A list item can contain an icon.',
        component: Icon,
      },
      {
        title: 'Image',
        description: 'A list item can contain an image.',
        component: Image,
      },
      {
        title: 'Link',
        description: 'A list can contain links.',
        component: LinkContent,
      },
      {
        component: LinkDescription,
      },
      {
        title: 'Header',
        description: 'A list item can contain a header.',
        component: Header,
      },
      {
        title: 'Description',
        description: 'A list item can contain a description.',
        component: Description,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Inverted',
        description: 'A list can be inverted to appear on a dark background.',
        component: ListInverted,
      },
    ],
  },
];
