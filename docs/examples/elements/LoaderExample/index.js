import Loader from './Loader.example';
import TextLoader from './TextLoader.example';
import TextLoaderInverted from './TextLoaderInverted.example';
import Indeterminate from './Indeterminate.example';
import Active from './Active.example';
import Disabled from './Disabled.example';
import Inline from './Inline.example';
import InlineCentered from './InlineCentered.example';
import SizeMini from './SizeMini.example';
import SizeTiny from './SizeTiny.example';
import SizeSmall from './SizeSmall.example';
import SizeMedium from './SizeMedium.example';
import SizeMassive from './SizeMassive.example';
import SizeLarge from './SizeLarge.example';
import SizeHuge from './SizeHuge.example';
import SizeBig from './SizeBig.example';
import Inverted from './Inverted.example';
import Inverted2 from './Inverted2.example';


export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Loader',
        description: 'A loader',
        component: Loader,
      },
      {
        title: 'Text Loader',
        description: 'A loader can contain text',
        component: TextLoader,
      },
      {
        description: 'A loader can contain text with shorthand prop',
        component: TextLoaderInverted,
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Indeterminate',
        description: "A loader can show it's unsure of how long a task will take",
        component: Indeterminate,
      },
      {
        title: 'Active',
        description: 'A loader can be active or visible',
        info: 'An active loader may not be clearly visible without using a `ui dimmer`',
        component: Active,
      },
      {
        title: 'Disabled',
        description: 'A loader can be disabled or hidden',
        component: Disabled,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Inline',
        description: 'Loaders can appear inline with content',
        component: Inline,
      },
      {
        title: 'Inline Center',
        description: 'Loaders can appear inline centered with content',
        component: InlineCentered,
      },
      {
        title: 'Size',
        description: 'Loaders can have different sizes',
        component: SizeMini,
      },
      {
        description: 'Tiny',
        component: SizeTiny,
      },
      {
        description: 'Small',
        component: SizeSmall,
      },
      {
        description: 'Medium',
        component: SizeMedium,
      },
      {
        description: 'Large',
        component: SizeLarge,
      },
      {
        description: 'Big',
        component: SizeBig,
      },
      {
        description: 'Huge',
        component: SizeHuge,
      },
      {
        description: 'Massive',
        component: SizeMassive,
      },
      {
        title: 'Inverted',
        description: 'Loaders can have their colors inverted.',
        component: Inverted,
      },
      {
        info: 'Loaders will automatically be inverted inside `inverted dimmer`',
        component: Inverted2,
      },
    ],
  },
];
