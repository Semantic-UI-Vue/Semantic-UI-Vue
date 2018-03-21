import { SemanticUIVueMixin } from '../../lib';
import SuiIcon from '../Icon/Icon';

export default {
  ...SuiIcon,
  name: 'SuiListIcon',
  mixins: [SemanticUIVueMixin],
  meta: {
    parent: 'SuiList',
  },
};
