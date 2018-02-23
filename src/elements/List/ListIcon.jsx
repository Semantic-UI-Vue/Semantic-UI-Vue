import SuiIcon from '../Icon/Icon';

export default {
  ...SuiIcon,
  name: 'SuiListIcon',
  mixins: [listenersMixin],
  meta: {
    parent: 'SuiList',
  },
};
