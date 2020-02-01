import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Form from 'semantic-ui-vue/collections/Form/Form';

describe('Form', () => {
  testClassFromProps(Form, [
    'loading',
    'success',
    'warning',
    'error',
    'inverted',
    'unstackable',
  ]);

  it('should have class equal width', () => {
    const form = shallowMount(Form, { propsData: { equalWidth: true } });
    expect(form.classes()).toContain('equal');
    expect(form.classes()).toContain('width');
  });

  it('should create a SUI form', () => {
    const form = shallowMount(Form);
    expect(form.classes()).toContain('ui');
    expect(form.classes()).toContain('form');
  });

  it('should have a size', () => {
    const form = shallowMount(Form, { propsData: { size: 'massive' } });
    expect(form.classes()).toContain('massive');
  });

  it('should have single state', async () => {
    const form = shallowMount(Form);

    form.setProps({ state: 'success' });
    await Vue.nextTick();
    expect(form.classes()).toContain('success');

    form.setProps({ state: 'warning' });
    await Vue.nextTick();
    expect(form.classes()).toContain('warning');

    form.setProps({ state: 'error' });
    await Vue.nextTick();
    expect(form.classes()).toContain('error');
  });
});
