import Basic from './Types/Basic.example';
import Pointing from './Types/Pointing.example';
import Secondary from './Types/Secondary.example';
import Text from './Types/Text.example';

import Loading from './States/Loading.example';

import Attached from './MenuVariations/Attached.example';
import NotAttached from './MenuVariations/NotAttached.example';
import NotTabular from './MenuVariations/NotTabular.example';
import Borderless from './MenuVariations/Borderless.example';
import Colored from './MenuVariations/Colored.example';
import ColoredInverted from './MenuVariations/ColoredInverted.example';
import VerticalTabular from './MenuVariations/VerticalTabular.example';
import VerticalTabularRight from './MenuVariations/VerticalTabularRight.example';
import MenuPositionRight from './MenuVariations/MenuPositionRight.example';

import ActiveIndex from './Usage/ActiveIndex.example';
import DefaultActiveIndex from './Usage/DefaultActiveIndex.example';
import OnTabChange from './Usage/OnTabChange.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Basic',
        description: 'A basic Tab',
        component: Basic,
      },
      {
        title: 'Pointing Menu',
        description: 'A tab menu can point to its tab panes',
        component: Pointing,
      },
      {
        title: 'Secondary Menu',
        description: 'A tab menu can adjust its appearance to de-emphasize its contents',
        component: Secondary,
      },
      {
        title: 'Text Menu',
        description: 'A tab menu can be formatted for text content',
        component: Text,
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Loading',
        description: 'A tab can display a loading indicator.',
        component: Loading,
      },
    ],
  },
  {
    title: 'Menu Variations',
    examples: [
      {
        title: 'Attached',
        description: 'A tab menu can be attached on bottom',
        component: Attached,
      },
      {
        description: 'A tab menu can remove its attached appearance',
        component: NotAttached,
      },
      {
        title: 'Not Tabular',
        description: 'A tab menu can disable its tabular appearance',
        component: NotTabular,
      },
      {
        title: 'Borderless',
        description: 'A tab menu can remove its borders',
        component: Borderless,
      },
      {
        title: 'Colored',
        description: 'A tab menu can be colored',
        info: 'Color only applies to the menu, not the pane, so they look best not attached',
        component: Colored,
      },
      {
        description: 'A tab menu can invert its colors',
        component: ColoredInverted,
      },
      {
        title: 'Vertical Tabular',
        description: 'A vertical tab menu can be positioned on either side',
        component: VerticalTabular,
      },
      {
        component: VerticalTabularRight,
      },
      {
        title: 'Menu Position',
        description: 'A vertical non tabular menu can be positioned on either side',
        component: MenuPositionRight,
      },
    ],
  },
  {
    title: 'Usage',
    examples: [
      {
        title: 'Active Index',
        description: 'A tab can be controlled component',
        component: ActiveIndex,
      },
      {
        title: 'Default Active Index',
        description: 'A tab can define which pane is active by default',
        component: DefaultActiveIndex,
      },
      {
        title: 'On Tab Change',
        description: 'You can capture the tab change event',
        component: OnTabChange,
      },
    ],
  },
];
