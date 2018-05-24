import Basic from './Types/Basic.example';
import Pointing from './Types/Pointing.example';
import Secondary from './Types/Secondary.example';
import Text from './Types/Text.example';

import Loading from './States/Loading.example';

import Attached from './MenuVariations/Attached.example';
import NotAttached from './MenuVariations/NotAttached.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Basic',
        description: 'A basic Tab',
        component: Basic,
      },
      {
        title: 'Pointing Menu',
        description: 'A tab menu can point to its tab panes',
        component: Pointing,
      },
      {
        title: 'Secondary Menu',
        description: 'A tab menu can adjust its appearance to de-emphasize its contents',
        component: Secondary,
      },
      {
        title: 'Text Menu',
        description: 'A tab menu can be formatted for text content',
        component: Text,
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Loading',
        description: 'A tab can display a loading indicator.',
        component: Loading,
      },
    ],
  },
  {
    title: 'Menu Variations',
    examples: [
      {
        title: 'Attached',
        description: 'A tab menu can be attached on bottom',
        component: Attached,
      },
      {
        description: 'A tab menu can remove its attached appearance',
        component: NotAttached,
      },
    ],
  },
];
