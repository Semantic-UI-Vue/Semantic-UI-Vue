import { shallowMount } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Search from 'semantic-ui-vue/modules/Search/Search';

describe('Search', () => {
  testClassFromProps(Search, ['ui', 'search']);

  it('should render categories', () => {
    const source = [
      { title: 'Camel', category: 'Mammal' },
      { title: 'Canary', category: 'Bird' },
      { title: 'Cat', category: 'Mammal' },
      { title: 'Tuna', category: 'Fish' },
    ];
    const search = shallowMount(Search, { propsData: { source, category: true } });
    const input = search.find('input.prompt');
    input.element.value = 'c';
    input.trigger('input');
    const results = search.find('.results');
    expect(results.exists()).toEqual(true);

    const categories = results.findAll('.category');
    expect(categories.exists()).toEqual(true);

    /** Bird category */
    const birdCategory = categories.at(0);
    expect(birdCategory.exists()).toEqual(true);

    const birdCategoryName = birdCategory.find('.name');
    expect(birdCategoryName.exists()).toEqual(true);

    const birdCategoryResults = birdCategory.findAll('.results .result');
    expect(birdCategoryName.text()).toEqual('Bird');
    expect(birdCategoryResults.at(0).text()).toEqual('Canary');

    /** Mammal category */
    const mammalCategory = categories.at(1);
    expect(mammalCategory.exists()).toEqual(true);

    const mammalCategoryName = mammalCategory.find('.name');
    expect(mammalCategoryName.exists()).toEqual(true);

    const mammalCategoryResults = mammalCategory.findAll('.results .result');
    expect(mammalCategoryName.text()).toEqual('Mammal');
    expect(mammalCategoryResults.at(0).text()).toEqual('Camel');
    expect(mammalCategoryResults.at(1).text()).toEqual('Cat');
  });
});
