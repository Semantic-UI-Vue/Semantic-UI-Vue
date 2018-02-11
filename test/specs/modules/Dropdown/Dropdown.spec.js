import { shallow } from 'vue-test-utils';
import * as common from 'test/utils';
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
});
