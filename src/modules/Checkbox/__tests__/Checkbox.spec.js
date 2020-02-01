import { shallowMount } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Checkbox from 'semantic-ui-vue/modules/Checkbox/Checkbox';

describe('Checkbox', () => {
  testClassFromProps(Checkbox, ['ui', 'checkbox']);

  it('should create a SUI Checkbox with label', () => {
    const checkbox = shallowMount(Checkbox, { propsData: { label: 'check' } });
    expect(checkbox.find('input').element.getAttribute('type')).toEqual(
      'checkbox',
    );
    expect(checkbox.find('label').element.textContent).toEqual('check');
  });

  it('should create a SUI Checkbox with label with attrs name and for', () => {
    const checkbox = shallowMount(Checkbox, {
      propsData: { label: 'check', name: 'sui' },
    });
    expect(checkbox.find('input').element.getAttribute('name')).toEqual('sui');
    expect(checkbox.find('label').element.getAttribute('for')).toEqual('sui');
  });

  it('should create a SUI Radio button with label', () => {
    const checkbox = shallowMount(Checkbox, {
      propsData: { label: 'check', radio: true },
    });
    expect(checkbox.find('input').element.getAttribute('type')).toEqual(
      'radio',
    );
    expect(checkbox.find('label').element.textContent).toEqual('check');
  });

  it('should create a SUI Checkbox in Disabled mode', () => {
    const checkbox = shallowMount(Checkbox, {
      propsData: { label: 'check', disabled: true },
    });
    expect(checkbox.classes()).toContain('disabled');
  });

  it('should create a SUI Radio button in Disabled mode', () => {
    const checkbox = shallowMount(Checkbox, {
      propsData: { label: 'check', radio: true, disabled: true },
    });
    expect(checkbox.classes()).toContain('disabled');
  });
});
