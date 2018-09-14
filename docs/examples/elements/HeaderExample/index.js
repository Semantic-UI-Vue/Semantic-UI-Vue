import PageHeaders from './PageHeaders.example';
import ContentHeaders from './ContentHeaders.example';
import IconHeaders from './IconHeaders.example';
import IconFriends from './IconFriends.example';
import SubHeader from './SubHeader.example';
import ImageAvatar from './ImageAvatar.example';
import ImageLearnMore from './ImageLearnMore.example';
import Icon from './Icon.example';
import IconSubheader from './IconSubheader.example';
import SubheaderContent from './SubheaderContent.example';
import Disabled from './Disabled.example';
import Dividing from './Dividing.example';
import Block from './Block.example';
import Attached from './Attached.example';
import Floating from './Floating.example';
import TextAlignment from './TextAlignment.example';
import Colored from './Colored.example';
import Inverted from './Inverted.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Page Headers',
        description: 'Headers may be oriented to give the hierarchy of a section in the context of the page.',
        component: PageHeaders,
      },
      {
        title: 'Content Headers',
        description: 'Headers may be oriented to give the importance of a section.',
        component: ContentHeaders,
      },
      {
        title: 'Icon Headers',
        description: 'A header can be formatted to emphasize an icon.',
        component: IconHeaders,
      },
      {
        component: IconFriends,
      },
      {
        title: 'Sub Headers',
        description: 'Headers may be formatted to label smaller or de-emphasized content.',
        component: SubHeader,
      },
    ],
  },
  {
    title: 'Content',
    examples: [
      {
        title: 'Image',
        description: 'A header may contain an image.',
        component: ImageAvatar,
      },
      {
        component: ImageLearnMore,
      },
      {
        title: 'Icon',
        description: 'A header may contain an icon.',
        component: Icon,
      },
      {
        component: IconSubheader,
      },
      {
        title: 'Subheader',
        description: 'Headers may contain subheaders.',
        component: SubheaderContent,
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Disabled',
        description: 'A header can show that it is inactive.',
        component: Disabled,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Dividing',
        description: 'A header can be formatted to divide itself from the content below it.',
        component: Dividing,
      },
      {
        title: 'Block',
        description: 'A header can be formatted to appear inside a content block.',
        component: Block,
      },
      {
        title: 'Attached',
        description: 'A header can be attached to other content, like a segment.',
        component: Attached,
      },
      {
        title: 'Floating',
        description: 'A header can sit to the left or right of other content.',
        component: Floating,
      },
      {
        title: 'Text Alignment',
        description: 'A header can have its text aligned to a side.',
        component: TextAlignment,
      },
      {
        title: 'Colored',
        description: 'A header can be formatted with different colors.',
        component: Colored,
      },
      {
        title: 'Inverted',
        description: 'A header can have its colors inverted for contrast.',
        component: Inverted,
      },
    ],
  },
];
