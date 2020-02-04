export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Step',
        description: 'A single step',
        file: 'Step',
      },
    ],
  },
  {
    name: 'Groups',
    examples: [
      {
        name: 'Steps',
        description: 'A set of steps',
        file: 'Steps',
      },
      {
        name: 'Ordered',
        description: 'A step can show a ordered sequence of steps',
        file: 'Ordered',
      },
      {
        name: 'Vertical',
        description: 'A step can be displayed stacked vertically',
        file: 'Vertical',
      },
    ],
  },
  {
    name: 'Content',
    examples: [
      {
        name: 'Description',
        description: 'A step can contain a description',
        info: 'Using props',
        file: 'Description',
      },
      {
        info: 'Using component',
        file: 'Description2',
      },
      {
        name: 'Icon',
        description: 'A step can contain an icon',
        file: 'Icon',
      },
      {
        name: 'Link',
        description: 'A step can link',
        info: 'Using `a` tag',
        file: 'Link',
      },
      {
        info: 'Using `link` props',
        file: 'Link2',
      },
    ],
  },
  {
    name: 'States',
    examples: [
      {
        name: 'Active',
        description: 'A step can be highlighted as active',
        file: 'Active',
      },
      {
        name: 'Completed',
        description: 'A step can show that a user has completed it',
        file: 'Completed',
      },
      {
        info: 'when no `icon props`, there must be `ordered props`',
        file: 'Completed2',
      },
      {
        name: 'Disabled',
        description: 'A step can show that it cannot be selected',
        file: 'Disabled',
      },
    ],
  },
  {
    name: 'Variations',
    examples: [
      {
        name: 'Stackable',
        description: 'A step can stack vertically only on smaller screens',
        file: 'Stackable',
      },
      {
        name: 'Fluid',
        description: 'A fluid step takes up the width of its container',
        file: 'Fluid',
      },
      {
        name: 'Unstackable',
        description: 'A step can prevent itself from stacking on mobile',
        file: 'Unstackable',
      },
      {
        name: 'Attached',
        description: 'Steps can be attached to other elements',
        file: 'Attached',
      },
      {
        name: 'EvenlyDivided',
        description: 'Steps can be divided evenly inside their parent',
        file: 'EvenlyDivided',
      },
      {
        file: 'EvenlyDivided2',
      },
      {
        name: 'Size',
        description: 'Steps can have different sizes',
        file: 'SizeMini',
      },
      {
        file: 'SizeTiny',
      },
      {
        file: 'SizeSmall',
      },
      {
        file: 'SizeLarge',
      },
      {
        file: 'SizeBig',
      },
      {
        file: 'SizeHuge',
      },
      {
        file: 'SizeMassive',
      },
    ],
  },
];
