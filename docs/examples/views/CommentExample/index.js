import Comment from './Comment.example';
import Threaded from './Threaded.example';
import Minimal from './Minimal.example';
import Size from './Size.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Comments',
        description: 'A basic list of comments',
        component: Comment,
      },
      {
        title: 'Threaded',
        description: 'A comment list can be threaded to showing the relationship between conversations',
        component: Threaded,
      },
      {
        title: 'Minimal',
        description: 'Comments can hide extra information unless a user shows intent to interact with a comment',
        component: Minimal,
      },
      {
        title: 'Size',
        description: 'Comments can have different sizes',
        component: Size,
      },
    ],
  },
];
