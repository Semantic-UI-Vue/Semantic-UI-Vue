import { shallow } from 'vue-test-utils';
import * as common from 'test/utils';
import Label from 'src/elements/Label/Label';
import Icon from 'src/elements/Icon/Icon';
import Flag from 'src/elements/Flag/Flag';
import Image from 'src/elements/Image/Image';
import Dropdown from 'src/modules/Dropdown/Dropdown';
import DropdownItem from 'src/modules/Dropdown/DropdownItem';

const DropdownWithRequired = common.withRequired(Dropdown, { options: [] });

describe('Dropdown', () => {
  common.testTag(DropdownWithRequired, 'div', {
    button: 'button',
  });
  common.testClass(DropdownWithRequired, ['ui', 'dropdown']);
  common.testClassFromProps(DropdownWithRequired, [
    'button', 'floating', 'fluid', 'labeled', 'multiple', 'selection', 'search',
  ]);

  it('should open a menu', () => {
    const openSpy = sinon.spy();
    const wrapper = shallow(DropdownWithRequired, { propsData: { placeholder: 'foo' } });
    wrapper.setData({ menu: { setOpen: openSpy } });
    wrapper.trigger('click');
    expect(openSpy).to.have.been.calledOnce;
    wrapper.find('i').trigger('click');
    wrapper.find('.text').trigger('click');
    expect(openSpy).to.have.been.calledThrice;
  });

  it('should close the menu', () => {
    const openSpy = sinon.spy();
    const wrapper = shallow(DropdownWithRequired);
    wrapper.setData({ menu: { setOpen: openSpy } });
    document.body.click();
    expect(openSpy).to.have.been.calledWith(false);
  });

  it('should close the menu when clicking on option', (done) => {
    const wrapper = shallow(DropdownWithRequired, {
      propsData: {
        options: [{ text: 'foo', value: 1 }],
      },
    });
    wrapper.trigger('click');
    wrapper.find(DropdownItem).trigger('click');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes()).to.not.include('visible');
      done();
    });
  });

  it('should close the menu when re-clicking on dropdown head', () => {
    const wrapper = shallow(DropdownWithRequired, {
      propsData: {
        placeholder: 'foo',
        options: [{ text: 'foo', value: 1 }],
      },
    });

    wrapper.trigger('click');
    wrapper.find('.text').trigger('click');
    expect(wrapper.classes()).to.not.include('visible');
  });

  it('should not close the menu when clicking on search input', () => {
    const wrapper = shallow(DropdownWithRequired, {
      propsData: {
        search: true,
        options: [{ text: 'foo', value: 1 }],
      },
    });

    wrapper.trigger('click');
    wrapper.find('input.search').trigger('click');
    expect(wrapper.classes()).to.include('visible');
  });

  it('should not close the menu when clicking on option when multiple=true', () => {
    const wrapper = shallow(DropdownWithRequired, {
      propsData: {
        multiple: true,
        options: [{ text: 'foo', value: 1 }],
      },
    });

    wrapper.trigger('click');
    wrapper.find(DropdownItem).trigger('click');
    expect(wrapper.classes()).to.include('visible');
  });

  it('should remove handler', () => {
    const openSpy = sinon.spy();
    const wrapper = shallow(DropdownWithRequired);
    wrapper.setData({ menu: { setOpen: openSpy } });
    wrapper.destroy();
    document.body.click();
    expect(openSpy).not.to.have.been.called;
  });

  it('should have options', () => {
    const wrapper = shallow(DropdownWithRequired, {
      propsData: {
        options: [{ text: 'foo' }, { text: 'bar' }],
      },
    });

    const options = wrapper.findAll(DropdownItem);
    expect(options.length).to.equal(2);
    expect(options.at(0).props().text).to.equal('foo');
    expect(options.at(1).props().text).to.equal('bar');
  });

  it('should have icons, flags and images in option', () => {
    const wrapper = shallow(DropdownWithRequired, {
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
    const item = wrapper.find(DropdownItem);
    const icon = item.find(Icon);
    expect(icon.exists()).to.equal(true);
    const flag = item.find(Flag);
    expect(flag.exists()).to.equal(true);
    const image = item.find(Image);
    expect(image.exists()).to.equal(true);
  });

  it('should choose option', () => {
    const inputSpy = sinon.spy();
    const wrapper = shallow(DropdownWithRequired, {
      propsData: {
        options: [{ text: 'foo', value: 1 }, { text: 'bar', value: 2 }],
      },
    });

    wrapper.vm.$on('input', inputSpy);

    const options = wrapper.findAll(DropdownItem);
    options.at(0).trigger('click');
    expect(inputSpy).to.have.been.calledWith(1);
    options.at(1).trigger('click');
    expect(inputSpy).to.have.been.calledWith(2);
  });

  it('should choose few options', () => {
    const inputSpy = sinon.spy();
    const wrapper = shallow(DropdownWithRequired, {
      propsData: {
        multiple: true,
        options: [{ text: 'foo', value: 1 }, { text: 'bar', value: 2 }],
      },
    });

    wrapper.vm.$on('input', (value) => {
      wrapper.setProps({ value });
    });
    wrapper.vm.$on('input', inputSpy);

    const options = wrapper.findAll(DropdownItem);

    options.at(0).trigger('click');
    expect(inputSpy).to.have.been.calledWith([1]);
    options.at(0).trigger('click');
    expect(inputSpy).to.have.been.calledWith([1, 2]);
  });

  it('should deselect option from selected', () => {
    const inputSpy = sinon.spy();
    const wrapper = shallow(DropdownWithRequired, {
      propsData: {
        multiple: true,
        options: [{ text: 'foo', value: 1 }, { text: 'bar', value: 2 }],
      },
    });

    wrapper.vm.$on('input', (value) => {
      wrapper.setProps({ value });
    });
    wrapper.vm.$on('input', inputSpy);

    const options = wrapper.findAll(DropdownItem);

    options.at(0).trigger('click');
    options.at(0).trigger('click');
    expect(inputSpy).to.have.been.calledWith([1, 2]);

    const selectedOptions = wrapper.findAll(Label);
    selectedOptions.at(0).find('i.icon.delete').trigger('click');

    expect(inputSpy).to.have.been.calledWith([2]);
  });

  it('should not select more than max-selections', () => {
    const inputSpy = sinon.spy();
    const wrapper = shallow(DropdownWithRequired, {
      propsData: {
        multiple: true,
        maxSelections: 1,
        options: [{ text: 'foo', value: 1 }, { text: 'bar', value: 2 }],
      },
    });

    wrapper.vm.$on('input', (value) => {
      wrapper.setProps({ value });
    });
    wrapper.vm.$on('input', inputSpy);

    const options = wrapper.findAll(DropdownItem);

    options.at(0).trigger('click');
    expect(inputSpy).to.have.been.calledWith([1]);
    options.at(0).trigger('click');
    expect(inputSpy).to.have.been.calledOnce;
  });

  it('should have icons, flags and images in selected text', () => {
    const wrapper = shallow(DropdownWithRequired, {
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
    wrapper.vm.$on('input', (value) => {
      wrapper.setProps({ value });
    });

    wrapper.find(DropdownItem).trigger('click');

    const text = wrapper.find('div.text');

    const icon = text.find(Icon);
    expect(icon.exists()).to.equal(true);
    const flag = text.find(Flag);
    expect(flag.exists()).to.equal(true);
    const image = text.find(Image);
    expect(image.exists()).to.equal(true);
  });

  it('should have icons, flags and images in selected options', () => {
    const wrapper = shallow(DropdownWithRequired, {
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
    wrapper.vm.$on('input', (value) => {
      wrapper.setProps({ value });
    });

    wrapper.find(DropdownItem).trigger('click');

    const label = wrapper.find(Label);

    const icon = label.find(Icon);
    expect(icon.exists()).to.equal(true);
    const flag = label.find(Flag);
    expect(flag.exists()).to.equal(true);
    const image = label.find(Image);
    expect(image.exists()).to.equal(true);
  });

  it('should filter options', () => {
    const wrapper = shallow(DropdownWithRequired, {
      propsData: {
        search: true,
        options: [{ text: 'foo' }, { text: 'bar' }, { text: 'baz' }],
      },
    });
    const input = wrapper.find('input.search');
    input.element.value = 'ba';
    input.trigger('input');
    const options = wrapper.findAll(DropdownItem);
    expect(options.at(0).props().text).to.equal('bar');
    expect(options.at(1).props().text).to.equal('baz');
    input.element.value = 'blah';
    input.trigger('input');
    const options2 = wrapper.findAll(DropdownItem);
    expect(options2.exists()).to.equal(false);
    const message = wrapper.find('.message');
    expect(message.text()).to.equal('No results found');
  });

  it('should delete option from selected when pressing backspace in empty search input', () => {
    const inputSpy = sinon.spy();
    const wrapper = shallow(DropdownWithRequired, {
      propsData: {
        search: true,
        multiple: true,
        options: [{ text: 'foo', value: 1 }, { text: 'bar', value: 2 }, { text: 'baz', value: 3 }],
      },
    });

    wrapper.vm.$on('input', (value) => {
      wrapper.setProps({ value });
    });
    wrapper.vm.$on('input', inputSpy);

    const options = wrapper.findAll(DropdownItem);

    options.at(0).trigger('click');
    options.at(0).trigger('click');

    expect(inputSpy).to.have.been.calledWith([1, 2]);

    wrapper.find('input.search').trigger('keydown', {
      keyCode: 8,
    });
    expect(inputSpy).to.have.been.calledWith([1]);
  });
});
