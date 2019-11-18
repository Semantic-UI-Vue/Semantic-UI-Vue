import { shallow } from '@vue/test-utils';
import { testClass } from 'test/utils';
import Modal from 'semantic-ui-vue/modules/Modal/Modal';
import Icon from 'semantic-ui-vue/elements/Icon/Icon';

describe('Modal', () => {
  testClass(Modal, ['ui', 'dimmer', 'page', 'modals', 'transition']);

  it('should create a SUI Modal', () => {
    const wrapper = shallow(Modal);
    const modal = wrapper.find('.ui.modal');
    expect(modal.exists()).to.equal(true);
  });

  it('should be basic', () => {
    const wrapper = shallow(Modal, { propsData: { basic: true } });
    const modal = wrapper.find('.ui.modal');
    expect(modal.classes()).to.include('basic');
  });

  it('should be top aligned', () => {
    const wrapper = shallow(Modal, { propsData: { aligned: 'top' } });
    const modal = wrapper.find('.ui.modal');
    expect(modal.classes()).to.include('top');
    expect(modal.classes()).to.include('aligned');
  });

  it('should have close icon', () => {
    const wrapper = shallow(Modal, { propsData: { closeIcon: true } });
    const icon = wrapper.find(Icon);
    expect(icon.exists()).to.equal(true);
    expect(icon.props().name).to.equal('close');
  });

  it('should have inverted dimmer', () => {
    const wrapper = shallow(Modal, { propsData: { dimmer: 'inverted' } });
    expect(wrapper.classes()).to.include('inverted');
  });

  it('should close modal when clicking on close icon', () => {
    const wrapper = shallow(Modal, { propsData: { open: true, closeIcon: true } });
    const icon = wrapper.find(Icon);
    icon.trigger('click');
    expect(wrapper.emitted().changed[0][0]).to.equal(false);
  });

  it('should close modal when clicking on dimmer', () => {
    const wrapper = shallow(Modal, { propsData: { open: true } });
    const dimmer = wrapper.find('.ui.dimmer');
    dimmer.trigger('click');
    expect(wrapper.emitted().changed[0][0]).to.equal(false);
  });

  it('should not close modal when clicking on dimmer within closable=false', () => {
    const wrapper = shallow(Modal, { propsData: { open: true, closable: false } });
    const dimmer = wrapper.find('.ui.dimmer');
    dimmer.trigger('click');
    expect(wrapper.emitted().changed).to.be.undefined;
  });
});
