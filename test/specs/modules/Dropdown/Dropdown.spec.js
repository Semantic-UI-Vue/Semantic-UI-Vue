// import { shallow } from 'vue-test-utils';
import * as common from 'test/utils';
import Dropdown from 'src/modules/Dropdown/Dropdown';

const DropdownWithRequired = common.withRequired(Dropdown, { options: [] });

describe('Dropdown', () => {
  common.testTag(DropdownWithRequired, 'div', {
    button: 'button',
  });
  common.testClass(DropdownWithRequired, ['ui', 'dropdown']);
  common.testClassFromProps(DropdownWithRequired, [
    'button', 'floating', 'fluid', 'labeled', 'multiple', 'selection', 'search',
  ]);
});
