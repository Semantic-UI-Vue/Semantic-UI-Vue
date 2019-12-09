export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Step',
        description: 'A single step',
        file: 'Step',
      },
    ],
  },
  {
    title: 'Groups',
    examples: [
      {
        title: 'Steps',
        description: 'A set of steps',
        file: 'Steps',
      },
      {
        title: 'Ordered',
        description: 'A step can show a ordered sequence of steps',
        file: 'Ordered',
      },
      {
        title: 'Vertical',
        description: 'A step can be displayed stacked vertically',
        file: 'Vertical',
      },
    ],
  },
  {
    title: 'Content',
    examples: [
      {
        title: 'Description',
        description: 'A step can contain a description',
        info: 'Using props',
        file: 'Description',
      },
      {
        info: 'Using component',
        file: 'Description2',
      },
      {
        title: 'Icon',
        description: 'A step can contain an icon',
        file: 'Icon',
      },
      {
        title: 'Link',
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
    title: 'States',
    examples: [
      {
        title: 'Active',
        description: 'A step can be highlighted as active',
        file: 'Active',
      },
      {
        title: 'Completed',
        description: 'A step can show that a user has completed it',
        file: 'Completed',
      },
      {
        info: 'when no `icon props`, there must be `ordered props`',
        file: 'Completed2',
      },
      {
        title: 'Disabled',
        description: 'A step can show that it cannot be selected',
        file: 'Disabled',
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Stackable',
        description: 'A step can stack vertically only on smaller screens',
        file: 'Stackable',
      },
      {
        title: 'Fluid',
        description: 'A fluid step takes up the width of its container',
        file: 'Fluid',
      },
      {
        title: 'UnStackable',
        description: 'A step can prevent itself from stacking on mobile',
        file: 'UnStackable',
      },
      {
        title: 'Attached',
        description: 'Steps can be attached to other elements',
        file: 'Attached',
      },
      {
        title: 'EvenlyDivided',
        description: 'Steps can be divided evenly inside their parent',
        file: 'EvenlyDivided',
      },
      {
        file: 'EvenlyDivided2',
      },
      {
        title: 'Size',
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
