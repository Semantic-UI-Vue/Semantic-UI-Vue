import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import * as common from 'test/utils';
import Label from 'semantic-ui-vue/elements/Label/Label';
import Icon from 'semantic-ui-vue/elements/Icon/Icon';
import Flag from 'semantic-ui-vue/elements/Flag/Flag';
import Image from 'semantic-ui-vue/elements/Image/Image';
import Dropdown from 'semantic-ui-vue/modules/Dropdown/Dropdown';
import DropdownItem from 'semantic-ui-vue/modules/Dropdown/DropdownItem';

const DropdownWithRequired = common.withRequired(Dropdown, { options: [] });

describe('Dropdown', () => {
  common.testTag(DropdownWithRequired, 'div', {
    button: 'div',
  });
  common.testClass(DropdownWithRequired, ['ui', 'dropdown']);
  common.testClassFromProps(DropdownWithRequired, [
    'button',
    'floating',
    'fluid',
    'labeled',
    'multiple',
    'selection',
    'search',
  ]);

  it('should open a menu', () => {
    const openSpy = jest.fn();
    const wrapper = shallowMount(DropdownWithRequired, {
      propsData: { placeholder: 'foo' },
    });
    wrapper.setData({ menu: { setOpen: openSpy } });
    wrapper.trigger('click');
    expect(openSpy).toHaveBeenCalledTimes(1);
    wrapper.find('i').trigger('click');
    wrapper.find('.text').trigger('click');
    expect(openSpy).toHaveBeenCalledTimes(3);
  });

  it('should close the menu', () => {
    const openSpy = jest.fn();
    const wrapper = shallowMount(DropdownWithRequired);
    wrapper.setData({ menu: { setOpen: openSpy } });
    document.body.click();
    expect(openSpy).toHaveBeenCalledWith(false);
  });

  it('should close the menu when clicking on option', done => {
    const wrapper = shallowMount(DropdownWithRequired, {
      propsData: {
        options: [{ text: 'foo', value: 1 }],
      },
    });
    wrapper.trigger('click');
    wrapper.find(DropdownItem).trigger('click');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes()).not.toContain('visible');
      done();
    });
  });

  it('should close the menu when re-clicking on dropdown head', () => {
    const wrapper = shallowMount(DropdownWithRequired, {
      propsData: {
        placeholder: 'foo',
        options: [{ text: 'foo', value: 1 }],
      },
    });

    wrapper.trigger('click');
    wrapper.find('.text').trigger('click');
    expect(wrapper.classes()).not.toContain('visible');
  });

  it('should not close the menu when clicking on search input', async () => {
    const wrapper = shallowMount(DropdownWithRequired, {
      propsData: {
        search: true,
        options: [{ text: 'foo', value: 1 }],
      },
    });

    wrapper.trigger('click');
    await Vue.nextTick();

    wrapper.find('input.search').trigger('click');
    await Vue.nextTick();
    expect(wrapper.classes()).toContain('visible');
  });

  it('should not close the menu when clicking on option when multiple=true', async () => {
    const wrapper = shallowMount(DropdownWithRequired, {
      propsData: {
        multiple: true,
        options: [{ text: 'foo', value: 1 }],
      },
    });

    wrapper.trigger('click');
    await Vue.nextTick();
    const item = wrapper.find(DropdownItem);
    wrapper.vm.register(item.vm);
    item.vm.$listeners.select({ text: 'foo', value: 1 });
    item.trigger('click');
    expect(wrapper.classes()).toContain('visible');
  });

  it('should remove handler', () => {
    const openSpy = jest.fn();
    const wrapper = shallowMount(DropdownWithRequired);
    wrapper.setData({ menu: { setOpen: openSpy } });
    wrapper.destroy();
    document.body.click();
    expect(openSpy).not.toHaveBeenCalled();
  });

  it('should have options', () => {
    const wrapper = shallowMount(DropdownWithRequired, {
      propsData: {
        options: [{ text: 'foo' }, { text: 'bar' }],
      },
    });

    const options = wrapper.findAll(DropdownItem);
    expect(options.length).toEqual(2);
    expect(options.at(0).props().text).toEqual('foo');
    expect(options.at(1).props().text).toEqual('bar');
  });

  it('should have icons, flags and images in selected text', async () => {
    const wrapper = shallowMount(DropdownWithRequired, {
      propsData: {
        options: [
          {
            text: 'foo',
            value: 1,
            flag: 'cn',
            icon: 'question',
            image: {
              src: '/test',
            },
          },
        ],
      },
    });

    wrapper.find(DropdownItem).trigger('click');
    wrapper.setProps({ value: 1 });
    await Vue.nextTick();

    const text = wrapper.find('div.text');
    const icon = text.find(Icon);
    expect(icon.exists()).toEqual(true);
    const flag = text.find(Flag);
    expect(flag.exists()).toEqual(true);
    const image = text.find(Image);
    expect(image.exists()).toEqual(true);
  });

  it('should have icons, flags and images in selected options', async () => {
    const wrapper = shallowMount(DropdownWithRequired, {
      propsData: {
        multiple: true,
        options: [
          {
            text: 'foo',
            value: 1,
            flag: 'cn',
            icon: 'question',
            image: {
              src: '/test',
            },
          },
        ],
      },
    });

    wrapper.setProps({ value: [1] });
    await Vue.nextTick();

    const label = wrapper.find(Label);
    const icon = label.find(Icon);
    expect(icon.exists()).toEqual(true);
    const flag = label.find(Flag);
    expect(flag.exists()).toEqual(true);
    const image = label.find(Image);
    expect(image.exists()).toEqual(true);
  });

  it('should filter options', async () => {
    const wrapper = shallowMount(DropdownWithRequired, {
      propsData: {
        search: true,
        noResultsMessage: 'Ops.. no results',
        options: [{ text: 'foo' }, { text: 'bar' }, { text: 'baz' }],
      },
    });
    const input = wrapper.find('input.search');
    input.element.value = 'ba';
    input.trigger('input');
    await Vue.nextTick();
    const options = wrapper.findAll(DropdownItem);
    expect(options.at(0).props().text).toEqual('bar');
    expect(options.at(1).props().text).toEqual('baz');
    input.element.value = 'blah';
    input.trigger('input');
    await Vue.nextTick();
    const options2 = wrapper.findAll(DropdownItem);
    expect(options2.exists()).toEqual(false);
    const message = wrapper.find('.message');
    expect(message.text()).toEqual('Ops.. no results');
  });

  it('should not delete last option from selected when pressing backspace in search input when filter is not empty', () => {
    const wrapper = shallowMount(DropdownWithRequired, {
      propsData: {
        search: true,
        multiple: true,
        options: [
          { text: 'foo', value: 1 },
          { text: 'bar', value: 2 },
          { text: 'baz', value: 3 },
        ],
      },
    });

    wrapper.setProps({ value: [1, 2] });
    wrapper.setData({ filter: 'a' });

    wrapper.find('input.search').trigger('keydown', {
      keyCode: 8,
    });

    expect(wrapper.emitted().input).toBeUndefined();
  });

  describe('allowAdditions', () => {
    it('should allow non-existent values if allowAdditions is true', () => {
      const wrapper = shallowMount(DropdownWithRequired, {
        propsData: {
          multiple: true,
          allowAdditions: true,
          value: [1, 2, 4000],
          options: [
            { text: 'foo', value: 1 },
            { text: 'bar', value: 2 },
          ],
        },
      });
      expect(wrapper.vm.selectedNodes.length).toEqual(3);
    });

    it('should select only existent values if allowAdditions is false. #320', () => {
      const wrapper = shallowMount(DropdownWithRequired, {
        propsData: {
          multiple: true,
          value: [1, 2, 4000],
          options: [
            { text: 'foo', value: 1 },
            { text: 'bar', value: 2 },
          ],
        },
      });
      expect(wrapper.vm.selectedNodes.length).toEqual(2);
    });
  });
});
