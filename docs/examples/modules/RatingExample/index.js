import Callback from './Callback.example';
import Rating from './Rating.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Rating',
        description: 'A basic rating element',
        component: Rating,
      },
      {
        title: 'onRate Callback',
        description: 'A rating calls back when the rating changes',
        component: Callback,
      },
    ],
  },
];
