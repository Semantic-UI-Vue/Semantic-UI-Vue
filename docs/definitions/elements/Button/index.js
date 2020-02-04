export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Button',
        description: 'A standard button',
        file: 'Button',
      },
      {
        name: 'Emphasis',
        description:
          'A button can be formatted to show different levels of emphasis',
        file: 'Emphasis',
      },
      {
        name: 'Animated',
        description: 'A button can animate to show hidden content',
        file: 'Animated',
      },
      {
        name: 'Labeled',
        description: 'A button can appear alongside a label',
        file: 'Labeled',
      },
      {
        file: 'Labeled2',
      },
      {
        name: 'Icon',
        description: 'A button can have only an icon',
        file: 'Icon',
      },
      {
        name: 'LabeledIcon',
        description: 'A button can use an icon as a label',
        file: 'LabeledIcon',
      },
      {
        name: 'Basic',
        description: 'A basic button is less pronounced',
        file: 'Basic',
      },
      {
        file: 'Basic2',
      },
      {
        file: 'Basic3',
      },
      {
        name: 'Inverted',
        description: 'A button can be formatted to appear on dark backgrounds',
        file: 'Inverted',
      },
      {
        file: 'Inverted2',
      },
    ],
  },
  {
    name: 'Groups',
    examples: [
      {
        name: 'Buttons',
        description: 'Buttons can exist together as a group',
        file: 'Buttons',
      },
      {
        name: 'IconButtons',
        description: 'Button groups can show groups of icons',
        file: 'IconButtons',
      },
    ],
  },
  {
    name: 'Content',
    examples: [
      {
        name: 'Conditional',
        description: 'Button groups can contain conditionals',
        file: 'Conditional',
      },
      {
        description:
          'Or buttons can have their text localized, or adjusted by using the text prop',
        info:
          'Or buttons can have their text localized, or adjusted by using the `text` attribute. ' +
          'If the size of the conditional changes you will need to adjust `@orCircleSize`',
        file: 'Conditional2',
      },
    ],
  },
  {
    name: 'States',
    examples: [
      {
        name: 'Active',
        description:
          'A button can show it is currently the active user selection',
        file: 'Active',
      },
      {
        name: 'Disabled',
        description:
          'A button can show it is currently unable to be interacted with',
        file: 'Disabled',
      },
      {
        name: 'Loading',
        description: 'A button can show a loading indicator',
        file: 'Loading',
      },
    ],
  },
  {
    name: 'Variations',
    examples: [
      {
        name: 'Social',
        description: 'A button can be formatted to link to a social websiten',
        file: 'Social',
      },
      {
        name: 'Size',
        description: 'A button can have different sizes',
        file: 'Size',
      },
      {
        name: 'Floated',
        description:
          'A button can be aligned to the left or right of its container',
        file: 'Floated',
      },
      {
        name: 'Colored',
        description: 'A button can have different colors',
        file: 'Colored',
      },
      {
        name: 'Compact',
        description:
          'A button can reduce its padding to fit into tighter spaces',
        file: 'Compact',
      },
      {
        name: 'Toggle',
        description: 'A button can be formatted to toggle on and off',
        file: 'Toggle',
      },
      {
        name: 'Positive',
        description: 'A button can hint towards a positive consequence',
        file: 'Positive',
      },
      {
        name: 'Negative',
        description: 'A button can hint towards a negative consequence',
        file: 'Negative',
      },
      {
        name: 'Fluid',
        description: 'A button can take the width of its container',
        file: 'Fluid',
      },
      {
        name: 'Circular',
        description: 'A button can be circular',
        file: 'Circular',
      },
      {
        name: 'CircularSocial',
        file: 'CircularSocial',
      },
      {
        name: 'Vertically Attached',
        description:
          'A button can be attached to the top or bottom of other content',
        info:
          'You should use `<div is="sui-button">...</div>` to make button attachable',
        file: 'Attached',
      },
      {
        file: 'AttachedGroup',
      },
      {
        name: 'Horizontally Attached',
        description:
          'A button can be attached to the left or right of other content',
        file: 'AttachedHorizontally',
      },
    ],
  },
  {
    name: 'Group Variations',
    examples: [
      {
        name: 'Vertical Buttons',
        description: 'Groups can be formatted to appear vertically',
        file: 'ButtonsVertical',
      },
      {
        name: 'Icon Buttons',
        description: 'Groups can be formatted as icons',
        file: 'ButtonsIcon',
      },
      {
        name: 'Labeled Icon Buttons',
        description: 'Groups can be formatted as labeled icons',
        file: 'ButtonsIconLabeled',
      },
      {
        name: 'Mixed Group',
        description:
          'Groups can be formatted to use multiple button types together',
        file: 'ButtonsMixed',
      },
      {
        name: 'Equal Width',
        description: 'Groups can have their widths divided evenly',
        file: 'ButtonsEqualWidth',
      },
      {
        name: 'Colored Buttons',
        description: 'Groups can have a shared color',
        file: 'ButtonsColored',
      },
      {
        name: 'Basic Buttons',
        description: 'A button group can be less pronounced',
        file: 'ButtonsBasic',
      },
      {
        info:
          'You have to specify `basic` attribute to each button in basic group if you need to use colorful buttons',
        file: 'ButtonsBasicColored',
      },
      {
        name: 'Group Sizes',
        description: 'Groups can have a shared size',
        file: 'ButtonsSizes',
      },
    ],
  },
];
