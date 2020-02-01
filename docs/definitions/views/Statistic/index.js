export default [
  {
    name: 'Types',
    examples: [
      {
        name: 'Statistic',
        description:
          'A statistic can display a value with a label above or below it',
        file: 'Statistic',
      },
      {
        name: 'Statistic Group',
        description: 'A group of statistics',
        file: 'StatisticGroup',
      },
    ],
  },
  {
    name: 'Content',
    examples: [
      {
        name: 'Value',
        description:
          'A statistic can contain a numeric, icon, image, or text value',
        file: 'StatisticContentValue',
      },
      {
        name: 'Label',
        description:
          'A statistic can contain a label to help provide context for the presented value',
        file: 'StatisticContentLabel',
      },
    ],
  },
  {
    name: 'Variations',
    examples: [
      {
        name: 'Horizontal Statistic',
        description: 'A statistic can present its measurement horizontally',
        file: 'StatisticHorizontal',
      },
      {
        name: 'Colored',
        description: 'A statistic can be formatted to be different colors',
        file: 'StatisticColored',
      },
      {
        name: 'Inverted',
        description: 'A statistic can be formatted to fit on a dark background',
        file: 'StatisticInverted',
      },
      {
        name: 'Evenly Divided',
        description: 'A statistic group can have its items divided evenly',
        file: 'StatisticEvenlyDivided',
      },
      {
        name: 'Floated',
        description:
          'An statistic can sit to the left or right of other content',
        file: 'StatisticFloated',
      },
      {
        name: 'Size',
        description: 'A statistic can vary in size',
        file: 'StatisticSize',
      },
    ],
  },
];
