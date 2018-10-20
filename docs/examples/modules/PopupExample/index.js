import Popup from './Popup.example';
import Titled from './Titled.example';
import Html from './Html.example';
import Width from './Width.example';
import Size from './Size.example';
import Flowing from './Flowing.example';
import Inverted from './Inverted.example';
import Position from './Position.example';

export default [{
  title: 'Types',
  examples: [{
    title: 'Popup',
    description: 'An element can specify popup content to appear.',
    component: Popup,
  }, {
    title: 'Titled',
    description: 'An element can specify popup content with a title.',
    component: Titled,
  }, {
    title: 'Html',
    description: 'An element can specify HTML for a popup.',
    component: Html,
  }],
}, {
  title: 'Variations',
  examples: [{
    title: 'Width',
    description: 'A popup can be extra wide to allow for longer content.',
    component: Width,
  }, {
    title: 'Size',
    description: 'A popup can vary in size.',
    component: Size,
  }, {
    title: 'Flowing',
    description: 'A popup can have no maximum width and continue to flow to fit its content.',
    component: Flowing,
  }, {
    title: 'Inverted',
    description: 'A popup can have its colors inverted.',
    component: Inverted,
  }, {
    title: 'Position',
    description: 'A popup can be position around its trigger.',
    component: Position,
  }],
}];
