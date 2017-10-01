import Statistic from './Statistic.example';
import StatisticGroup from './StatisticGroup.example';
import StatisticContentValue from './StatisticContentValue.example';
import StatisticContentLabel from './StatisticContentLabel.example';
import StatisticHorizontal from './StatisticHorizontal.example';
import StatisticColored from './StatisticColored.example';
import StatisticInverted from './StatisticInverted.example';
import StatisticEvenlyDivided from './StatisticEvenlyDivided.example';
import StatisticFloated from './StatisticFloated.example';
import StatisticSize from './StatisticSize.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Statistic',
        description: 'A statistic can display a value with a label above or below it',
        component: Statistic,
      },
      {
        title: 'Statistic Group',
        description: 'A group of statistics',
        component: StatisticGroup,
      },
    ],
  },
  {
    title: 'Content',
    examples: [
      {
        title: 'Value',
        description: 'A statistic can contain a numeric, icon, image, or text value',
        component: StatisticContentValue,
      },
      {
        title: 'Label',
        description: 'A statistic can contain a label to help provide context for the presented value',
        component: StatisticContentLabel,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Horizontal Statistic',
        description: 'A statistic can present its measurement horizontally',
        component: StatisticHorizontal,
      },
      {
        title: 'Colored',
        description: 'A statistic can be formatted to be different colors',
        component: StatisticColored,
      },
      {
        title: 'Inverted',
        description: 'A statistic can be formatted to fit on a dark background',
        component: StatisticInverted,
      },
      {
        title: 'Evenly Divided',
        description: 'A statistic group can have its items divided evenly',
        component: StatisticEvenlyDivided,
      },
      {
        title: 'Floated',
        description: 'An statistic can sit to the left or right of other content',
        component: StatisticFloated,
      },
      {
        title: 'Size',
        description: 'A statistic can vary in size',
        component: StatisticSize,
      },
    ],
  },
];
