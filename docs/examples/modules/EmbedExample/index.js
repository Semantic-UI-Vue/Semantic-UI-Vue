import ActiveExample from './Active.example';
import AspectRatioExample from './AspectRatio.example';
import CustomContentExample from './CustomContent.example';
import IframeExample from './Iframe.example';
import SourceSettingsExample from './SourceSettings.example';
import VimeoExample from './Vimeo.example';
import YouTubeExample from './YouTube.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'YouTube',
        description: 'An embed can be used to display YouTube Content',
        component: YouTubeExample,
      },
      {
        title: 'Vimeo',
        description: 'An embed can be used to display Vimeo content',
        component: VimeoExample,
      },
      {
        title: 'Custom Content',
        description: 'An embed can display any web content',
        info: 'Embeds use an intrinsic aspect ratios to embed content responsively.' +
          ' Content will preserve their intrinsic aspect ratio for all browser sizes responsively',
        component: CustomContentExample,
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Active',
        description: 'An embed can be active',
        component: ActiveExample,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Aspect Ratio',
        description: 'An embed can specify an alternative aspect ratio',
        component: AspectRatioExample,
      },
    ],
  },
  {
    title: 'Usage',
    examples: [
      {
        title: 'Source settings',
        description: 'Settings to configure video behavior',
        component: SourceSettingsExample,
      },
      {
        title: 'Iframe',
        description: 'You can pass props to a shorthand',
        component: IframeExample,
      },
    ],
  },
];
