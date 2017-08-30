import Message from './Message.example';
import ListMessage from './ListMessage.example';
import IconMessage from './IconMessage.example';
import DismissableBlock from './DismissableBlock.example';

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
];
