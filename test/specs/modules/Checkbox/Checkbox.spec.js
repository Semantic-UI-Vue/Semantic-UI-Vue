import { shallow } from 'vue-test-utils';
import { testClassFromProps } from 'test/utils';
import Checkbox from 'src/modules/Checkbox/Checkbox';

describe('Checkbox', () => {
  testClassFromProps(Checkbox, ['ui', 'checkbox']);

  it('should create a SUI Checkbox with label', () => {
    const checkbox = shallow(Checkbox, { propsData: { label: 'check' } });
    expect(checkbox.find('input').element.getAttribute('type')).to.equal('checkbox');
    expect(checkbox.find('label').element.textContent).to.equal('check');
  });
});
