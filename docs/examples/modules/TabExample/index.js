import Basic from './BasicTab.example';
import Pointing from './Pointing.example';

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
    ],
  },
];
