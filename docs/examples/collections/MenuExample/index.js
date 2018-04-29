import Menu from './Menu.example';
import TopAttachedMenu from './TopAttachedMenu.example';
import SecondaryMenu from './SecondaryMenu.example';
import PointingMenu from './PointingMenu.example';
import PointingSecondaryMenu from './PointingSecondaryMenu.example';
import TabularMenu from './TabularMenu.example';
import TabularMenuBottom from './TabularMenuBottom.example';
import TabularMenuLeft from './TabularMenuLeft.example';
import TabularMenuRight from './TabularMenuRight.example';
import TextMenu from './TextMenu.example';

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
      {
        component: PointingSecondaryMenu,
      },
      {
        title: 'Tabular',
        description: 'A menu can be formatted to show tabs of information.',
        component: TabularMenu,
      },
      {
        component: TabularMenuBottom,
      },
      {
        component: TabularMenuLeft,
      },
      {
        component: TabularMenuRight,
      },
      {
        title: 'Text',
        description: 'A menu can be formatted for text content.',
        component: TextMenu,
      },
    ],
  },
];
