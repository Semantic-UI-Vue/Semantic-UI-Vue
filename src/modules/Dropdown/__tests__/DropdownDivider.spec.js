// import { shallowMount } from '@vue/test-utils';
import * as common from 'test/utils';
import DropdownDivider from 'semantic-ui-vue/modules/Dropdown/DropdownDivider';

describe('Dropdown', () => {
  describe('DropdownDivider', () => {
    common.testTag(DropdownDivider, 'div');
    common.testClass(DropdownDivider, ['divider']);
  });
});
