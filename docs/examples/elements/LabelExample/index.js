import Label from './Label.example';
import Image from './Image.example';
import Image2 from './Image2.example';
import Image3 from './Image3.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Label',
        description: 'A label',
        component: Label,
      },
      {
        title: 'Image',
        description: 'A label can be formatted to emphasize an image',
        component: Image,
      },
      {
        component: Image2,
      },
      {
        component: Image3,
      },
    ],
  },
];
