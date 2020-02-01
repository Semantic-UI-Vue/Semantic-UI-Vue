export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Basic',
        description: 'A basic Tab',
        file: 'Basic',
      },
      {
        name: 'Pointing Menu',
        description: 'A tab menu can point to its tab panes',
        file: 'Pointing',
      },
      {
        name: 'Secondary Menu',
        description:
          'A tab menu can adjust its appearance to de-emphasize its contents',
        file: 'Secondary',
      },
      {
        name: 'Text Menu',
        description: 'A tab menu can be formatted for text content',
        file: 'Text',
      },
    ],
  },
  {
    name: 'States',
    examples: [
      {
        name: 'Loading',
        description: 'A tab can display a loading indicator.',
        file: 'Loading',
      },
      {
        name: 'Disabled',
        description: 'A tab can be disabled',
        file: 'Disabled',
      },
    ],
  },
  {
    name: 'Menu Variations',
    examples: [
      {
        name: 'Attached',
        description: 'A tab menu can be attached on bottom',
        file: 'Attached',
      },
      {
        description: 'A tab menu can remove its attached appearance',
        file: 'NotAttached',
      },
      {
        name: 'Not Tabular',
        description: 'A tab menu can disable its tabular appearance',
        file: 'NotTabular',
      },
      {
        name: 'Borderless',
        description: 'A tab menu can remove its borders',
        file: 'Borderless',
      },
      {
        name: 'Colored',
        description: 'A tab menu can be colored',
        info:
          'Color only applies to the menu, not the pane, so they look best not attached',
        file: 'Colored',
      },
      {
        description: 'A tab menu can invert its colors',
        file: 'ColoredInverted',
      },
      {
        name: 'Vertical Tabular',
        description: 'A vertical tab menu can be positioned on either side',
        file: 'VerticalTabular',
      },
      {
        file: 'VerticalTabularRight',
      },
      {
        name: 'Menu Position',
        description:
          'A vertical non tabular menu can be positioned on either side',
        file: 'MenuPositionRight',
      },
    ],
  },
  {
    name: 'Usage',
    examples: [
      {
        name: 'Active Index',
        description: 'A tab can be controlled component',
        file: 'ActiveIndex',
      },
      {
        name: 'Default Active Index',
        description: 'A tab can define which pane is active by default',
        file: 'DefaultActiveIndex',
      },
      {
        name: 'On Tab Change',
        description: 'You can capture the tab change event',
        file: 'OnTabChange',
      },
      {
        name: 'Adding Icons and Labels',
        description:
          'You can use icon and label props on sui-tab-pane to add label and icon',
        file: 'CustomMenuItems',
      },
    ],
  },
];
