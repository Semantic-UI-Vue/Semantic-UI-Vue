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
];
