import Input from './Input.example';
import Focus from './Focus.example';
import Loading from './Loading.example';
import Loading2 from './Loading2.example';
import Icon from './Icon.example';

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
    ],
  },
];
