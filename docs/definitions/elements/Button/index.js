export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Button',
        description: 'A standard button',
        file: 'Button',
      },
      {
        title: 'Emphasis',
        description: 'A button can be formatted to show different levels of emphasis',
        file: 'Emphasis',
      },
      {
        title: 'Animated',
        description: 'A button can animate to show hidden content',
        file: 'Animated',
      },
      {
        title: 'Labeled',
        description: 'A button can appear alongside a label',
        file: 'Labeled',
      },
      {
        file: 'Labeled2',
      },
      {
        title: 'Icon',
        description: 'A button can have only an icon',
        file: 'Icon',
      },
      {
        title: 'LabeledIcon',
        description: 'A button can use an icon as a label',
        file: 'LabeledIcon',
      },
      {
        title: 'Basic',
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
        title: 'Inverted',
        description: 'A button can be formatted to appear on dark backgrounds',
        file: 'Inverted',
      },
      {
        file: 'Inverted2',
      },
    ],
  },
  {
    title: 'Groups',
    examples: [
      {
        title: 'Buttons',
        description: 'Buttons can exist together as a group',
        file: 'Buttons',
      },
      {
        title: 'IconButtons',
        description: 'Button groups can show groups of icons',
        file: 'IconButtons',
      },
    ],
  },
  {
    title: 'Content',
    examples: [
      {
        title: 'Conditional',
        description: 'Button groups can contain conditionals',
        file: 'Conditional',
      },
      {
        description: 'Or buttons can have their text localized, or adjusted by using the text prop',
        info: 'Or buttons can have their text localized, or adjusted by using the `text` attribute. ' +
        'If the size of the conditional changes you will need to adjust `@orCircleSize`',
        file: 'Conditional2',
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Active',
        description: 'A button can show it is currently the active user selection',
        file: 'Active',
      },
      {
        title: 'Disabled',
        description: 'A button can show it is currently unable to be interacted with',
        file: 'Disabled',
      },
      {
        title: 'Loading',
        description: 'A button can show a loading indicator',
        file: 'Loading',
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Social',
        description: 'A button can be formatted to link to a social websiten',
        file: 'Social',
      },
      {
        title: 'Size',
        description: 'A button can have different sizes',
        file: 'Size',
      },
      {
        title: 'Floated',
        description: 'A button can be aligned to the left or right of its container',
        file: 'Floated',
      },
      {
        title: 'Colored',
        description: 'A button can have different colors',
        file: 'Colored',
      },
      {
        title: 'Compact',
        description: 'A button can reduce its padding to fit into tighter spaces',
        file: 'Compact',
      },
      {
        title: 'Toggle',
        description: 'A button can be formatted to toggle on and off',
        file: 'Toggle',
      },
      {
        title: 'Positive',
        description: 'A button can hint towards a positive consequence',
        file: 'Positive',
      },
      {
        title: 'Negative',
        description: 'A button can hint towards a negative consequence',
        file: 'Negative',
      },
      {
        title: 'Fluid',
        description: 'A button can take the width of its container',
        file: 'Fluid',
      },
      {
        title: 'Circular',
        description: 'A button can be circular',
        file: 'Circular',
      },
      {
        title: 'CircularSocial',
        file: 'CircularSocial',
      },
      {
        title: 'Vertically Attached',
        description: 'A button can be attached to the top or bottom of other content',
        info: 'You should use `<div is="sui-button">...</div>` to make button attachable',
        file: 'Attached',
      },
      {
        file: 'AttachedGroup',
      },
      {
        title: 'Horizontally Attached',
        description: 'A button can be attached to the left or right of other content',
        file: 'AttachedHorizontally',
      },
    ],
  },
  {
    title: 'Group Variations',
    examples: [
      {
        title: 'Vertical Buttons',
        description: 'Groups can be formatted to appear vertically',
        file: 'ButtonsVertical',
      },
      {
        title: 'Icon Buttons',
        description: 'Groups can be formatted as icons',
        file: 'ButtonsIcon',
      },
      {
        title: 'Labeled Icon Buttons',
        description: 'Groups can be formatted as labeled icons',
        file: 'ButtonsIconLabeled',
      },
      {
        title: 'Mixed Group',
        description: 'Groups can be formatted to use multiple button types together',
        file: 'ButtonsMixed',
      },
      {
        title: 'Equal Width',
        description: 'Groups can have their widths divided evenly',
        file: 'ButtonsEqualWidth',
      },
      {
        title: 'Colored Buttons',
        description: 'Groups can have a shared color',
        file: 'ButtonsColored',
      },
      {
        title: 'Basic Buttons',
        description: 'A button group can be less pronounced',
        file: 'ButtonsBasic',
      },
      {
        info: 'You have to specify `basic` attribute to each button in basic group if you need to use colorful buttons',
        file: 'ButtonsBasicColored',
      },
      {
        title: 'Group Sizes',
        description: 'Groups can have a shared size',
        file: 'ButtonsSizes',
      },
    ],
  },
];
