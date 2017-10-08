import Shape from './Shape.example';
import Cube from './Cube.example';
import TextShape from './Text.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Shape',
        description: 'A shape is a three dimensional object including any flat content as a side.',
        component: Shape,
      },
      {
        title: 'Cube',
        description: 'A cube shape is formatted so that each side is the face of a cube.',
        component: Cube,
      },
      {
        title: 'Text',
        description: 'A text shape is formatted to allow for sides of text to be displayed.',
        component: TextShape,
      },
    ],
  },
];
