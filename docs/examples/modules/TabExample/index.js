export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Basic',
        description: 'A basic Tab',
        file: 'Basic',
      },
      {
        title: 'Pointing Menu',
        description: 'A tab menu can point to its tab panes',
        file: 'Pointing',
      },
      {
        title: 'Secondary Menu',
        description: 'A tab menu can adjust its appearance to de-emphasize its contents',
        file: 'Secondary',
      },
      {
        title: 'Text Menu',
        description: 'A tab menu can be formatted for text content',
        file: 'Text',
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Loading',
        description: 'A tab can display a loading indicator.',
        file: 'Loading',
      },
      {
        title: 'Disabled',
        description: 'A tab can be disabled',
        file: 'Disabled',
      },
    ],
  },
  {
    title: 'Menu Variations',
    examples: [
      {
        title: 'Attached',
        description: 'A tab menu can be attached on bottom',
        file: 'Attached',
      },
      {
        description: 'A tab menu can remove its attached appearance',
        file: 'NotAttached',
      },
      {
        title: 'Not Tabular',
        description: 'A tab menu can disable its tabular appearance',
        file: 'NotTabular',
      },
      {
        title: 'Borderless',
        description: 'A tab menu can remove its borders',
        file: 'Borderless',
      },
      {
        title: 'Colored',
        description: 'A tab menu can be colored',
        info: 'Color only applies to the menu, not the pane, so they look best not attached',
        file: 'Colored',
      },
      {
        description: 'A tab menu can invert its colors',
        file: 'ColoredInverted',
      },
      {
        title: 'Vertical Tabular',
        description: 'A vertical tab menu can be positioned on either side',
        file: 'VerticalTabular',
      },
      {
        file: 'VerticalTabularRight',
      },
      {
        title: 'Menu Position',
        description: 'A vertical non tabular menu can be positioned on either side',
        file: 'MenuPositionRight',
      },
    ],
  },
  {
    title: 'Usage',
    examples: [
      {
        title: 'Active Index',
        description: 'A tab can be controlled component',
        file: 'ActiveIndex',
      },
      {
        title: 'Default Active Index',
        description: 'A tab can define which pane is active by default',
        file: 'DefaultActiveIndex',
      },
      {
        title: 'On Tab Change',
        description: 'You can capture the tab change event',
        file: 'OnTabChange',
      },
      {
        title: 'Adding Icons and Labels',
        description: 'You can use icon and label props on sui-tab-pane to add label and icon',
        file: 'CustomMenuItems',
      },
    ],
  },
];
