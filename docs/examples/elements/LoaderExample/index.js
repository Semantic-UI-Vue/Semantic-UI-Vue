import Loader from './Loader.example';
import TextLoader from './TextLoader.example';
import TextLoaderInverted from './TextLoaderInverted.example';
import Indeterminate from './Indeterminate.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Loader',
        description: 'A loader',
        component: Loader,
      },
      {
        title: 'Text Loader',
        description: 'A loader can contain text',
        component: TextLoader,
      },
      {
        description: 'A loader can contain text with shorthand prop',
        component: TextLoaderInverted,
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Indeterminate',
        description: 'A loader can show it\'s unsure of how long a task will take',
        component: Indeterminate,
      },
    ],
  },
];
