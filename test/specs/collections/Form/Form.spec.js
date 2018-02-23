import { shallow } from 'vue-test-utils';
import { testClassFromProps } from 'test/utils';
import Form from 'src/collections/Form/Form';

describe('Form', () => {
  testClassFromProps(Form, [
    'loading', 'success', 'warning', 'error', 'inverted', 'unstackable',
  ]);

  it('should have class equal width', () => {
    const form = shallow(Form, { propsData: { equalWidth: true } });
    expect(form.classes()).to.include('equal');
    expect(form.classes()).to.include('width');
  });

  it('should create a SUI form', () => {
    const form = shallow(Form);
    expect(form.classes()).to.include('ui');
    expect(form.classes()).to.include('form');
  });

  it('should have a size', () => {
    const form = shallow(Form, { propsData: { size: 'massive' } });
    expect(form.classes()).to.include('massive');
  });

  it('should have single state', () => {
    const form = shallow(Form);

    form.setProps({ state: 'success' });
    expect(form.classes()).to.include('success');

    form.setProps({ state: 'warning' });
    expect(form.classes()).to.include('warning');

    form.setProps({ state: 'error' });
    expect(form.classes()).to.include('error');
  });
});
