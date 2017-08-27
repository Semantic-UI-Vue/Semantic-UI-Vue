import Rail from './Rail.example';
import Internal from './Internal.example';
import Dividing from './Dividing.example';
import Attached from './Attached.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Rail',
        description: 'A rail can be presented on the left or right side of a container',
        component: Rail,
      },
      {
        title: 'Internal',
        description: 'A rail can attach itself to the inside of a container',
        component: Internal,
      },
      {
        title: 'Dividing',
        description: 'A rail can create a division between itself and a container',
        component: Dividing,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Attached',
        description: 'A rail can appear attached to the main viewport',
        component: Attached,
      },
    ],
  },
];
