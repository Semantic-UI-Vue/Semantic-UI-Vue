import Sidebar from './Sidebar.example';
import SidebarVisible from './SidebarVisible.example';
import SidebarDimmed from './SidebarDimmed.example';
import SidebarTransitions from './SidebarTransitions.example';
import SidebarDisplayingMultiple from './SidebarDisplayingMultiple.example';
import SidebarCallbacks from './SidebarCallbacks.example';
import SidebarTarget from './SidebarTarget.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Sidebar',
        description: 'A sidebar',
        component: Sidebar,
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Visible',
        description: 'A sidebar can be visible on the page.',
        component: SidebarVisible,
      },
      {
        title: 'Dimmed',
        description: 'A pusher can be dimmed.',
        component: SidebarDimmed,
      },
    ],
  },
  {
    title: 'Examples',
    examples: [
      {
        title: 'Transitions',
        description:
          'Not all sidebar Transitions are available for every sidebar direction, or when multiple sidebars are visible at a time.',
        component: SidebarTransitions,
      },
      {
        title: 'Displaying Multiple',
        description:
          'Multiple sidebars can be displayed at the same time only when using a supported animation likepush or overlay.',
        component: SidebarDisplayingMultiple,
      },
    ],
  },
  {
    title: 'Usage',
    examples: [
      {
        title: 'Callbacks',
        description: 'A sidebar can have callbacks.',
        component: SidebarCallbacks,
      },
      {
        title: 'Target',
        description: 'A sidebar can handle clicks on the passed element.',
        component: SidebarTarget,
      },
    ],
  },
];
