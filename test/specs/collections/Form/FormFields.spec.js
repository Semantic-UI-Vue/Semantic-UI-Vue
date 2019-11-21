import { shallowMount } from '@vue/test-utils';
import * as common from 'test/utils';
import FormFields from 'semantic-ui-vue/collections/Form/FormFields';

describe('Form', () => describe('FormFields', () => {
  common.testClassFromProps(FormFields, [
    'inline', 'grouped', 'unstackable',
  ]);
  common.testClass(FormFields, ['fields']);

  it('should have fields number', () => {
    const formFields = shallowMount(FormFields);

    formFields.setProps({ fields: 2 });
    expect(formFields.classes()).toContain('two');
    // formFields.setProps({ fields: 'three' });
    // expect(formFields.classes()).toContain('three');
    // formFields.setProps({ fields: 'equal' });
    // expect(formFields.classes()).toContain('equal');
  });
}));
