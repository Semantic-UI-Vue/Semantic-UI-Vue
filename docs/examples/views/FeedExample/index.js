import ImageLabel from './ImageLabel.example';
import ImageLabelShorthand from './ImageLabelShorthand.example';

export default [
  {
    title: 'Types',
  },
  {
    title: 'Content',
    examples: [
      {
        title: 'Image Label',
        description: 'An event can contain an image label',
        component: ImageLabel,
      },
      {
        description: 'You can do the same using shorthands',
        component: ImageLabelShorthand,
      },
    ],
  },
];
