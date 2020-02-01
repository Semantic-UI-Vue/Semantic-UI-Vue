import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import * as common from 'test/utils';
import FormFields from 'semantic-ui-vue/collections/Form/FormFields';

describe('Form', () => {
  describe('FormFields', () => {
    common.testClassFromProps(FormFields, ['inline', 'grouped', 'unstackable']);
    common.testClass(FormFields, ['fields']);

    it('should have fields number', async () => {
      const formFields = shallowMount(FormFields);
      formFields.setProps({ fields: 2 });
      await Vue.nextTick();
      expect(formFields.classes()).toContain('two');
    });
  });
});
