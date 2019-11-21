import { shallowMount } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Search from 'semantic-ui-vue/modules/Search/Search';

describe('Search', () => {
  testClassFromProps(Search, ['ui', 'search']);

  it('should render input icon', () => {
    const search = shallowMount(Search, {
      slots: {
        icon: '<i class="search icon"></i>',
      },
    });
    search.setProps({ input: true });

    const input = search.find('input.prompt');
    const iconContainer = search.find('.ui.icon.input');
    const icon = iconContainer.find('i.search.icon');

    input.trigger('focus');
    expect(iconContainer.exists()).toEqual(true);
    expect(icon.exists()).toEqual(true);
  });
});
