import { shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Search from 'src/modules/Search/Search';

describe('Search', () => {
  testClassFromProps(Search, ['ui', 'search']);

  it('should by default search when min 1 character is typed', () => {
    const search = shallow(Search);
    search.setProps({ value: 'a' });

    const results = search.find('.results');
    const input = search.find('input.prompt');

    input.trigger('focus');
    expect(results.classes()).to.include('in');
  });

  it('should not search when a number of typed characters is smaller than min characters', () => {
    const search = shallow(Search, { propsData: { minCharacters: 2 } });
    search.setProps({ value: 'a' });

    const results = search.find('.results');
    const input = search.find('input.prompt');

    input.trigger('focus');
    expect(results.exists()).to.equal(false);
  });

  it('should search when a number of typed characters is equal to min characters', () => {
    const source = [{ name: 'Horse' }, { name: 'Parrot' }, { name: 'Cat' }, { name: 'catfish' }];
    const search = shallow(Search, { propsData: { source, minCharacters: 3 } });
    search.setProps({ value: 'cat' });

    const results = search.find('.results');
    const input = search.find('input.prompt');
    input.trigger('focus');
    expect(results.classes()).to.include('in');
    const resultItems = results.findAll('.result .content .title');
    expect(resultItems.at(0).text()).to.equal('Cat');
    expect(resultItems.at(1).text()).to.equal('catfish');
  });

  it('should search when a number of typed characters is greater than min characters', () => {
    const source = [{ name: 'Horse' }, { name: 'Parrot' }, { name: 'Cat' }, { name: 'catfish' }];
    const search = shallow(Search, { propsData: { source, minCharacters: 3 } });
    search.setProps({ value: 'catf' });
    const results = search.find('.results');

    const input = search.find('input.prompt');
    input.trigger('focus');
    expect(results.classes()).to.include('in');
    const resultItems = results.findAll('.result .content .title');
    expect(resultItems.at(0).text()).to.equal('catfish');
  });
});
