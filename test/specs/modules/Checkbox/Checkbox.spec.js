import { shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Checkbox from 'src/modules/Checkbox/Checkbox';

describe('Checkbox', () => {
  testClassFromProps(Checkbox, ['ui', 'checkbox']);

  it('should create a SUI Checkbox with label', () => {
    const checkbox = shallow(Checkbox, { propsData: { label: 'check' } });
    expect(checkbox.find('input').element.getAttribute('type')).to.equal('checkbox');
    expect(checkbox.find('label').element.textContent).to.equal('check');
  });

  it('should create a SUI Checkbox with label with attrs name and for', () => {
    const checkbox = shallow(Checkbox, { propsData: { label: 'check', name: 'sui' } });
    expect(checkbox.find('input').element.getAttribute('name')).to.equal('sui');
    expect(checkbox.find('label').element.getAttribute('for')).to.equal('sui');
  });

  it('should create a SUI Radio button with label', () => {
    const checkbox = shallow(Checkbox, { propsData: { label: 'check', radio: true } });
    expect(checkbox.find('input').element.getAttribute('type')).to.equal('radio');
    expect(checkbox.find('label').element.textContent).to.equal('check');
  });

  it('should create a SUI Checkbox in Disabled mode', () => {
    const checkbox = shallow(Checkbox, { propsData: { label: 'check', disabled: true } });
    expect(checkbox.classes()).to.include('disabled');
  });

  it('should create a SUI Radio button in Disabled mode', () => {
    const checkbox = shallow(Checkbox, { propsData: { label: 'check', radio: true, disabled: true } });
    expect(checkbox.classes()).to.include('disabled');
  });
});
