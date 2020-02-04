import { shallowMount } from '@vue/test-utils';
import * as common from 'test/utils';
import DropdownItem from 'semantic-ui-vue/modules/Dropdown/DropdownItem';
import Image from 'semantic-ui-vue/elements/Image/Image';

describe('Dropdown', () => {
  describe('DropdownItem', () => {
    common.testTag(DropdownItem, 'div');
    common.testClass(DropdownItem, ['item']);

    it('should contain an Image', () => {
      const imageProps = {
        src: 'bar',
      };

      const wrapper = shallowMount(DropdownItem, {
        propsData: {
          image: imageProps,
        },
      });

      const image = wrapper.find(Image);
      expect(image.props().src).toEqual('bar');
    });
  });
});
