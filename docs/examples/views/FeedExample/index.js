import ContentDateExample from './ContentDate.example';
import ContentDateShorthandExample from './ContentDateShorthand.example';
import ExtraImagesExample from './ExtraImages.example';
import ExtraImagesShorthandExample from './ExtraImagesShorthand.example';
import ExtraTextExample from './ExtraText.example';
import ExtraTextShorthandExample from './ExtraTextShorthand.example';
import FeedExample from './Feed.example';
import FeedShorthandExample from './FeedShorthand.example';
import IconLabelExample from './IconLabel.example';
import IconLabelShorthandExample from './IconLabelShorthand.example';
import ImageLabelExample from './ImageLabel.example';
import ImageLabelShorthandExample from './ImageLabelShorthand.example';
import SummaryDateExample from './SummaryDate.example';
import SummaryDateShorthandExample from './SummaryDateShorthand.example';
import SizeLargeExample from './SizeLarge.example';
import SizeSmallExample from './SizeSmall.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Feed',
        description: 'A feed',
        component: FeedExample,
      },
      {
        description: 'You can also pass an array of events to generate the markup',
        component: FeedShorthandExample,
      },
    ],
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
      {
        title: 'Summary Date',
        description: 'An event summary can contain a date',
        component: SummaryDateExample,
      },
      {
        description: 'You can do the same using shorthands',
        component: SummaryDateShorthandExample,
      },
      {
        title: 'Extra Images',
        description: 'An event can contain extra images.',
        component: ExtraImagesExample,
      },
      {
        description: 'You can do the same using shorthands',
        component: ExtraImagesShorthandExample,
      },
      {
        title: 'Extra Text',
        description: 'An event can contain extra text.',
        component: ExtraTextExample,
      },
      {
        description: 'You can do the same using shorthands',
        component: ExtraTextShorthandExample,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Size',
        description: 'A feed can have different sizes',
        component: SizeSmallExample,
      },
      {
        component: SizeLargeExample,
      },
    ],
  },
];
