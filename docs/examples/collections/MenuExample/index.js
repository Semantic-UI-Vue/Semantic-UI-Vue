import Menu from './Menu.example';
import TopAttachedMenu from './TopAttachedMenu.example';
import SecondaryMenu from './SecondaryMenu.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Menu',
        description: 'A menu',
        component: Menu,
      },
      {
        component: TopAttachedMenu,
      },
      {
        title: 'Secondary Menu',
        description: 'A menu can adjust its appearance to de-emphasize its contents',
        component: SecondaryMenu,
      },
    ],
  },
];
