import Modal from './Modal.example';
import ScrollingModal from './ScrollingModal.example';

export default [
  {
    title: 'Types',
    examples: [
      {
        title: 'Modal',
        description: 'A standard modal',
        component: Modal,
      },
    ],
  },
  {
    title: 'Variations',
    examples: [
      {
        title: 'Scrolling Content',
        description: 'A modal can use the entire size of the screen.',
        component: ScrollingModal,
      },
    ],
  },
];
