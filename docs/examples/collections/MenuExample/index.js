import Menu from './Menu.example';
import TopAttachedMenu from './TopAttachedMenu.example';
import SecondaryMenu from './SecondaryMenu.example';
import PointingMenu from './PointingMenu.example';

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
        description: 'A menu can adjust its appearance to de-emphasize its contents.',
        component: SecondaryMenu,
      },
      {
        title: 'Pointing',
        description: 'A menu can point to show its relationship to nearby content.',
        component: PointingMenu,
      },
    ],
  },
];
