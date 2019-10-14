import Message from './Message.example';
import ListMessage from './ListMessage.example';
import IconMessage from './IconMessage.example';
import DismissableBlock from './DismissableBlock.example';
import Hidden from './Hidden.example';
import Visible from './Visible.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Message',
        description: 'A basic message',
        component: Message,
      },
      {
        title: 'List Message',
        description: 'A message with a list',
        component: ListMessage,
      },
      {
        title: 'Icon Message',
        description: 'A message can contain an icon',
        component: IconMessage,
      },
      {
        title: 'Dismissable Block',
        description: 'A message that the user can choose to hide',
        component: DismissableBlock,
      },
    ],
  },
  {
    title: 'States',
    examples: [
      {
        title: 'Hidden',
        description: 'A message can be hidden.',
        component: Hidden,
      },
      {
        title: 'Visible',
        description: 'A message can be set to visible to force itself to be shown.',
        component: Visible,
      },
    ],
  },
];
