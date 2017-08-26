import Image from './Image.example';
import ImageLink from './ImageLink.example';
import Hidden from './Hidden.example';
import Disabled from './Disabled.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Image',
        description: 'An image',
        component: Image,
      },
      {
        title: 'Image Link',
        description: 'An image can be formatted to link to other content',
        component: ImageLink,
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Hidden',
        description: 'An image can be hidden',
        component: Hidden,
      },
      {
        title: 'Disabled',
        description: 'An image can show that it is disabled and cannot be selected',
        component: Disabled,
      },
    ],
  },
];
