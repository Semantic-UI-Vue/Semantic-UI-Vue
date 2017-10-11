import ImageLabelExample from './ImageLabel.example';
import ImageLabelShorthandExample from './ImageLabelShorthand.example';
import IconLabelExample from './IconLabel.example';
import IconLabelShorthandExample from './IconLabelShorthand.example';
import ContentDateExample from './ContentDate.example';
import ContentDateShorthandExample from './ContentDateShorthand.example';

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
        component: ImageLabelExample,
      },
      {
        description: 'You can do the same using shorthands',
        component: ImageLabelShorthandExample,
      },
      {
        title: 'Icon Label',
        description: 'An event can contain an icon label',
        component: IconLabelExample,
      },
      {
        description: 'You can do the same using shorthands',
        component: IconLabelShorthandExample,
      },
      {
        title: 'Content Date',
        description: 'Event content can contain a date',
        component: ContentDateExample,
      },
      {
        description: 'You can do the same using shorthands',
        component: ContentDateShorthandExample,
      },
    ],
  },
];
