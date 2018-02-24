import { shallow } from 'vue-test-utils';
import * as common from 'test/utils';
import FormFields from 'src/collections/Form/FormFields';

describe('Form', () => describe('FormFields', () => {
  common.testClassFromProps(FormFields, [
    'inline', 'grouped', 'unstackable',
  ]);
  common.testClass(FormFields, ['fields']);

  it('should have fields number', () => {
    const formFields = shallow(FormFields);

    formFields.setProps({ fields: 2 });
    expect(formFields.classes()).to.include('two');
    // formFields.setProps({ fields: 'three' });
    // expect(formFields.classes()).to.include('three');
    // formFields.setProps({ fields: 'equal' });
    // expect(formFields.classes()).to.include('equal');
  });
}));
