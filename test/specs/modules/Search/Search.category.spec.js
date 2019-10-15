import { shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Search from 'src/modules/Search/Search';

describe('Search', () => {
  testClassFromProps(Search, ['ui', 'search']);

  it('should render categories', () => {
    const source = [
      { title: 'Camel', category: 'Mammal' },
      { title: 'Canary', category: 'Bird' },
      { title: 'Cat', category: 'Mammal' },
      { title: 'Tuna', category: 'Fish' },
    ];
    const search = shallow(Search, { propsData: { source, category: true } });
    const input = search.find('input.prompt');
    input.element.value = 'c';
    input.trigger('input');
    const results = search.find('.results');
    expect(results.exists()).to.equal(true);

    const categories = results.findAll('.category');
    expect(categories.exists()).to.equal(true);

    /** Bird category */
    const birdCategory = categories.at(0);
    expect(birdCategory.exists()).to.equal(true);

    const birdCategoryName = birdCategory.find('.name');
    expect(birdCategoryName.exists()).to.equal(true);

    const birdCategoryResults = birdCategory.findAll('.results .result');
    expect(birdCategoryName.text()).to.equal('Bird');
    expect(birdCategoryResults.at(0).text()).to.equal('Canary');

    /** Mammal category */
    const mammalCategory = categories.at(1);
    expect(mammalCategory.exists()).to.equal(true);

    const mammalCategoryName = mammalCategory.find('.name');
    expect(mammalCategoryName.exists()).to.equal(true);

    const mammalCategoryResults = mammalCategory.findAll('.results .result');
    expect(mammalCategoryName.text()).to.equal('Mammal');
    expect(mammalCategoryResults.at(0).text()).to.equal('Camel');
    expect(mammalCategoryResults.at(1).text()).to.equal('Cat');
  });
});
