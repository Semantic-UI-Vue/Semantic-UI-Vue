import { shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Search from 'src/modules/Search/Search';

describe('Search', () => {
  testClassFromProps(Search, ['ui', 'search']);

  it('should create a SUI Search', () => {
    const search = shallow(Search, {});
    expect(search.find('input'));
    expect(search.exists()).to.equal(true);
  });

  it('should not display results before first search', () => {
    const search = shallow(Search, { propsData: { value: null } });
    const results = search.find('.results');
    expect(results.exists()).to.equal(false);
  });

  it('should display the results when text is entered and input is focused', () => {
    const search = shallow(Search, { propsData: { value: 'a' } });
    const results = search.find('.results');
    const input = search.find('input.prompt');
    input.trigger('focus');
    expect(results.exists()).to.equal(true);
    expect(results.classes()).to.include('in');
  });

  it('should hide the results when text has been removed', () => {
    const search = shallow(Search, { propsData: { value: 'a' } });
    const results = search.find('.results');
    search.setProps({ value: '' });
    expect(results.classes()).to.include('out');
  });

  it('should hide the results when it is not focused', () => {
    const search = shallow(Search, { propsData: { value: 'a' } });
    const results = search.find('.results');
    expect(results.exists()).to.equal(true);
    expect(results.classes()).to.include('out');
  });

  it('should display no records message when search list is empty', () => {
    const search = shallow(Search, { propsData: { value: 'a' } });
    const results = search.find('.results');
    const input = search.find('input.prompt');
    input.trigger('focus');
    const header = results.find('.message.empty .header');
    const description = results.find('.message.empty .description');
    expect(header.text()).to.equal('No Results');
    expect(description.text()).to.equal('Your search returned no results');
  });

  it('should display no records message when nothing is found with given query', () => {
    const source = [{ name: 'Horse' }, { name: 'Parrot' }, { name: 'Cat' }, { name: 'Catfish' }];
    const search = shallow(Search, { propsData: { value: 'x', source } });
    const results = search.find('.results');
    const input = search.find('input.prompt');
    input.trigger('focus');
    const header = results.find('.message.empty .header');
    const description = results.find('.message.empty .description');
    expect(header.text()).to.equal('No Results');
    expect(description.text()).to.equal('Your search returned no results');
  });

  it('should search through local source and display filtered results', () => {
    const source = [{ name: 'Horse' }, { name: 'Parrot' }, { name: 'Cat' }, { name: 'Catfish' }];
    const search = shallow(Search, { propsData: { value: 'C', source } });
    const results = search.find('.results');
    const input = search.find('input.prompt');
    input.trigger('focus');
    const resultItems = results.findAll('.result .content .title');
    expect(resultItems.at(0).text()).to.equal('Cat');
    expect(resultItems.at(1).text()).to.equal('Catfish');
  });

  it('should search using non case sensitive mode', () => {
    const source = [{ name: 'Horse' }, { name: 'Parrot' }, { name: 'Cat' }, { name: 'catfish' }];
    const search = shallow(Search, { propsData: { value: 'c', source } });
    const results = search.find('.results');
    const input = search.find('input.prompt');
    input.trigger('focus');
    const resultItems = results.findAll('.result .content .title');
    expect(resultItems.at(0).text()).to.equal('Cat');
    expect(resultItems.at(1).text()).to.equal('catfish');
  });

  it('should emit input event when value changes', () => {
    const source = [{ name: 'Horse' }, { name: 'Parrot' }, { name: 'Cat' }, { name: 'catfish' }];
    const search = shallow(Search, { propsData: { value: 'c', source } });
    const input = search.find('input.prompt');
    input.element.value = 'av';
    input.trigger('input');
    expect(search.emitted().input[0][0]).to.equal('av');
  });

  it('should display previous results when query is cleared', () => {
    const source = [{ name: 'Horse' }, { name: 'Parrot' }, { name: 'Cat' }, { name: 'catfish' }];
    const search = shallow(Search, { propsData: { value: 'c', source } });
    const results = search.find('.results');
    const input = search.find('input.prompt');
    input.trigger('focus');
    search.setProps({ value: '' });
    expect(results.classes()).to.include('out');
    const resultItems = results.findAll('.result .content .title');
    expect(resultItems.at(0).text()).to.equal('Cat');
    expect(resultItems.at(1).text()).to.equal('catfish');
  });
});
