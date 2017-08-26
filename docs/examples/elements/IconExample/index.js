import Disabled from './Disabled.example';
import Loading from './Loading.example';
import Fitted from './Fitted.example';
import Size from './Size.example';

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
    ],
  },
];
