import Label from './Label.example';
import Image from './Image.example';
import Image2 from './Image2.example';
import Image3 from './Image3.example';
import Corner from './Corner.example';
import Pointing from './Pointing.example';
import Tag from './Tag.example';

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
      {
        title: 'Pointing',
        description: 'A label can point to content next to it.',
        component: Pointing,
      },
      {
        title: 'Corner',
        description: 'A label can position itself in the corner of an element.',
        component: Corner,
      },
      {
        title: 'Tag',
        description: 'A label can appear as a tag.',
        component: Tag,
      },
    ],
  },
];
