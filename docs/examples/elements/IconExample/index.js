import Disabled from './Disabled.example';
import Loading from './Loading.example';
import Fitted from './Fitted.example';
import Size from './Size.example';
import Link from './Link.example';
import Flipped from './Flipped.example';
import Rotated from './Rotated.example';
import Circular from './Circular.example';
import Bordered from './Bordered.example';
import Colored from './Colored.example';
import Inverted from './Inverted.example';
import Group from './IconGroup.example';
import Group2 from './IconGroup2.example';
import GroupCorner from './IconGroupCorner.example';
import GroupCorner2 from './IconGroupCorner2.example';
import GroupCornerHeader from './IconGroupCornerHeader.example';

export default [
  {
    title: 'States',
    examples: [
      {
        title: 'Disabled',
        description: 'An icon can show that it is disabled',
        component: Disabled,
      },
      {
        title: 'Loading',
        description: 'An icon can be used as a simple loader',
        component: Loading,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Fitted',
        description: 'An icon can be fitted, without any space to the left or right of it.',
        component: Fitted,
      },
      {
        title: 'Size',
        description: 'An icon can vary in size',
        component: Size,
      },
      {
        title: 'Link',
        description: 'An icon can be formatted as a link',
        component: Link,
      },
      {
        title: 'Flipped',
        description: 'An icon can be flipped',
        component: Flipped,
      },
      {
        title: 'Rotated',
        description: 'An icon can be rotated',
        component: Rotated,
      },
      {
        title: 'Circular',
        description: 'An icon can be formatted to appear circular',
        component: Circular,
      },
      {
        title: 'Bordered',
        description: 'An icon can be formatted to appear bordered',
        component: Bordered,
      },
      {
        title: 'Colored',
        description: 'An icon can be formatted with different colors',
        component: Colored,
      },
      {
        title: 'Inverted',
        description: 'An icon can have its colors inverted for contrast',
        component: Inverted,
      },
    ],
  },
  {
    title: 'Groups',
    examples: [
      {
        title: 'Icons',
        description: 'Several icons can be used together as a group',
        component: Group,
      },
      {
        component: Group2,
      },
      {
        title: 'Corner Icon',
        description: 'A group of icons can display a smaller corner icon',
        component: GroupCorner,
      },
      {
        component: GroupCorner2,
      },
      {
        component: GroupCornerHeader,
      },
    ],
  },
];
