import { shallowMount } from '@vue/test-utils';
import { testClass } from 'test/utils';
import Modal from 'semantic-ui-vue/modules/Modal/Modal';
import Icon from 'semantic-ui-vue/elements/Icon/Icon';

describe('Modal', () => {
  testClass(Modal, ['ui', 'dimmer', 'page', 'modals', 'transition']);

  it('should create a SUI Modal', () => {
    const wrapper = shallowMount(Modal);
    const modal = wrapper.find('.ui.modal');
    expect(modal.exists()).toEqual(true);
  });

  it('should be basic', () => {
    const wrapper = shallowMount(Modal, { propsData: { basic: true } });
    const modal = wrapper.find('.ui.modal');
    expect(modal.classes()).toContain('basic');
  });

  it('should be top aligned', () => {
    const wrapper = shallowMount(Modal, { propsData: { aligned: 'top' } });
    const modal = wrapper.find('.ui.modal');
    expect(modal.classes()).toContain('top');
    expect(modal.classes()).toContain('aligned');
  });

  it('should have close icon', () => {
    const wrapper = shallowMount(Modal, { propsData: { closeIcon: true } });
    const icon = wrapper.find(Icon);
    expect(icon.exists()).toEqual(true);
    expect(icon.props().name).toEqual('close');
  });

  it('should have inverted dimmer', () => {
    const wrapper = shallowMount(Modal, { propsData: { dimmer: 'inverted' } });
    expect(wrapper.classes()).toContain('inverted');
  });

  it('should close modal when clicking on close icon', () => {
    const wrapper = shallowMount(Modal, {
      propsData: { open: true, closeIcon: true },
    });
    const icon = wrapper.find(Icon);
    icon.trigger('click');
    expect(wrapper.emitted().changed[0][0]).toEqual(false);
  });

  it('should close modal when clicking on dimmer', () => {
    const wrapper = shallowMount(Modal, { propsData: { open: true } });
    const dimmer = wrapper.find('.ui.dimmer');
    dimmer.trigger('click');
    expect(wrapper.emitted().changed[0][0]).toEqual(false);
  });

  it('should not close modal when clicking on dimmer within closable=false', () => {
    const wrapper = shallowMount(Modal, {
      propsData: { open: true, closable: false },
    });
    const dimmer = wrapper.find('.ui.dimmer');
    dimmer.trigger('click');
    expect(wrapper.emitted().changed).toBeUndefined();
  });
});
