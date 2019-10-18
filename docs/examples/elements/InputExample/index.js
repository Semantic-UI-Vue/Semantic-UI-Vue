import Input from './Input.example';
import Focus from './Focus.example';
import Loading from './Loading.example';
import Loading2 from './Loading2.example';
import Disabled from './Disabled.example';
import Icon from './Icon.example';
import Size from './Size.example';
import Size2 from './Size2.example';
import Size3 from './Size3.example';
import Size4 from './Size4.example';
import Size5 from './Size5.example';
import Size6 from './Size6.example';
import Fluid from './Fluid.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Input',
        description: 'A standard input field',
        component: Input,
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Focus',
        description: 'An input field can show a user is currently interacting with it',
        component: Focus,
      },
      {
        title: 'Loading',
        description: 'An icon input field can show that it is currently loading data',
        component: Loading,
      },
      {
        component: Loading2,
      },
      {
        title: 'Disabled',
        description: 'An input field can show that it is disabled',
        component: Disabled,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Icon',
        description: 'An input can be formatted with an icon',
        component: Icon,
      },
      {
        title: 'Size',
        description: 'An input can vary in size',
        component: Size,
      },
      {
        component: Size2,
      },
      {
        component: Size3,
      },
      {
        component: Size4,
      },
      {
        component: Size5,
      },
      {
        component: Size6,
      },
      {
        title: 'Fluid',
        description: 'An input can take the size of its container',
        component: Fluid,
      },
    ],
  },
];
