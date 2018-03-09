import { shallow } from '@vue/test-utils';
import * as common from 'test/utils';
import DropdownItem from 'src/modules/Dropdown/DropdownItem';
import Image from 'src/elements/Image/Image';

describe('Dropdown', () => describe('DropdownItem', () => {
  common.testTag(DropdownItem, 'div');
  common.testClass(DropdownItem, ['item']);

  it('should contain an Image', () => {
    const imageProps = {
      src: 'bar',
    };

    const wrapper = shallow(DropdownItem, {
      propsData: {
        image: imageProps,
      },
    });

    const image = wrapper.find(Image);
    expect(image.props().src).to.equal('bar');
  });
}));
