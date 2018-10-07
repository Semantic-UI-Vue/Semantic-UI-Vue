import Image from './Image.example';
import ImageLink from './ImageLink.example';
import Hidden from './Hidden.example';
import Disabled from './Disabled.example';
import Avatar from './Avatar.example';
import Bordered from './Bordered.example';
import Fluid from './Fluid.example';
import Rounded from './Rounded.example';
import Circular from './Circular.example';
import VerticallyAligned from './VerticallyAligned.example';
import Centered from './Centered.example';
import Spaced from './Spaced.example';
import Floated from './Floated.example';
import Size from './Size.example';
import GroupSize from './GroupSize.example';

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
  {
    title: 'Variations',
    examples: [
      {
        title: 'Avatar',
        description: 'An image may be formatted to appear inline with text as an avatar.',
        component: Avatar,
      },
      {
        title: 'Bordered',
        description: 'An image may include a border to emphasize the edges of white or transparent content.',
        component: Bordered,
      },
      {
        title: 'Fluid',
        description: 'An image can take up the width of its container.',
        component: Fluid,
      },
      {
        title: 'Rounded',
        description: 'An image may appear rounded.',
        component: Rounded,
      },
      {
        title: 'Circular',
        description: 'An image may appear circular.',
        component: Circular,
      },
      {
        title: 'Vertically Aligned',
        description: 'An image may appear circular.',
        component: VerticallyAligned,
      },
      {
        title: 'Centered',
        description: 'An image can appear centered in a content block.',
        component: Centered,
      },
      {
        title: 'Spaced',
        description: 'An image can specify that it needs an additional spacing to separate it from nearby content.',
        component: Spaced,
      },
      {
        title: 'Floated',
        description: 'An image can sit to the left or right of other content.',
        component: Floated,
      },
      {
        title: 'Size',
        description: 'An image may appear at different sizes',
        component: Size,
      },
    ],
  },
  {
    title: 'Groups',
    examples: [
      {
        title: 'Size',
        description: 'A group of images can be formatted to have the same size.',
        component: GroupSize,
      },
    ],
  },
];
