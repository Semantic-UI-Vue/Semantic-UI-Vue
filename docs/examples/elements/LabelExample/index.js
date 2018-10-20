import Label from './Label.example';
import Image from './Image.example';
import Image2 from './Image2.example';
import Image3 from './Image3.example';
import Corner from './Corner.example';
import Pointing from './Pointing.example';
import PointingRed from './PointingRed.example';
import Tag from './Tag.example';
import Ribbon from './Ribbon.example';
import RibbonImage from './RibbonImage.example';
import Attached from './Attached.example';
import Horizontal from './Horizontal.example';
import Floating from './Floating.example';
import Detail from './Detail.example';
import Icon from './Icon.example';
import ContentImage from './ContentImage.example';
import Link from './Link.example';
import LinkText from './LinkText.example';
import Circular from './Circular.example';
import CircularEmpty from './CircularEmpty.example';
import Basic from './Basic.example';
import Colored from './Colored.example';
import Size from './Size.example';

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
        description: 'A label can point to Variations next to it.',
        component: Pointing,
      },
      {
        component: PointingRed,
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
      {
        title: 'Ribbon',
        description: 'A label can appear as a ribbon attaching itself to an element.',
        component: Ribbon,
      },
      {
        component: RibbonImage,
      },
      {
        title: 'Attached',
        description: 'A label can attach to a content segment.',
        component: Attached,
      },
      {
        title: 'Horizontal',
        description: 'A horizontal label is formatted to label content along-side it horizontally.',
        component: Horizontal,
      },
      {
        title: 'Floating',
        description: 'A label can float above another element.',
        component: Floating,
      },
    ],
  },
  {
    title: 'Content',
    examples: [
      {
        title: 'Detail',
        description: 'A label can contain a detail.',
        component: Detail,
      },
      {
        title: 'Icon',
        description: 'A label can include an icon.',
        component: Icon,
      },
      {
        title: 'Image',
        description: 'A label can include an image.',
        component: ContentImage,
      },
      {
        title: 'Link',
        description: 'A label can be a link or contain an item that links.',
        component: Link,
      },
      {
        component: LinkText,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Circular',
        description: 'A label can be circular.',
        component: Circular,
      },
      {
        component: CircularEmpty,
      },
      {
        title: 'Basic',
        description: 'A label can reduce its complexity',
        component: Basic,
      },
      {
        title: 'Colored',
        description: 'A label can have different colors.',
        component: Colored,
      },
      {
        title: 'Size',
        description: 'A label can be small or large.',
        component: Size,
      },
    ],
  },
];
