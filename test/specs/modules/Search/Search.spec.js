import { shallow, mount } from '@vue/test-utils';
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
    const search = shallow(Search, { propsData: { query: null } });
    const results = search.find('.results');
    expect(results.exists()).to.equal(false);
  });

  it('should display the results when text is entered and input is focused', () => {
    const search = mount(Search, {});
    const input = search.find('input.prompt');
    input.trigger('focus');
    input.element.value = 'a';
    input.trigger('input');
    const results = search.find('.results');
    expect(results.exists()).to.equal(true);
    expect(results.classes()).to.include('in');
  });

  it('should hide the results when text has been removed', () => {
    const search = mount(Search, {});
    const input = search.find('input.prompt');
    input.trigger('focus');
    input.element.value = 'a';
    input.trigger('input');
    input.element.value = '';
    input.trigger('input');
    const results = search.find('.results');
    expect(results.classes()).to.include('out');
  });

  it('should hide the results when it is not focused', () => {
    const search = mount(Search, {});
    const input = search.find('input.prompt');
    input.element.value = 'a';
    input.trigger('input');
    input.element.value = '';
    input.trigger('input');
    const results = search.find('.results');
    expect(results.exists()).to.equal(true);
    expect(results.classes()).to.include('out');
  });

  it('should display no records message when search list is empty', () => {
    const search = mount(Search, {});
    const input = search.find('input.prompt');
    input.trigger('focus');
    input.element.value = 'a';
    input.trigger('input');
    const results = search.find('.results');
    const header = results.find('.message.empty .header');
    const description = results.find('.message.empty .description');
    expect(header.text()).to.equal('No Results');
    expect(description.text()).to.equal('Your search returned no results');
  });

  it('should display no records message when nothing is found with given query', () => {
    const source = [{ title: 'Horse' }, { title: 'Parrot' }, { title: 'Cat' }, { title: 'Catfish' }];
    const search = mount(Search, { propsData: { source } });
    const input = search.find('input.prompt');
    input.trigger('focus');
    input.element.value = 'x';
    input.trigger('input');
    const results = search.find('.results');
    const header = results.find('.message.empty .header');
    const description = results.find('.message.empty .description');
    expect(header.text()).to.equal('No Results');
    expect(description.text()).to.equal('Your search returned no results');
  });

  it('should search through local source and display filtered results', () => {
    const source = [{ title: 'Horse' }, { title: 'Parrot' }, { title: 'Cat' }, { title: 'Catfish' }];
    const search = mount(Search, { propsData: { source } });
    const input = search.find('input.prompt');
    input.trigger('focus');
    input.element.value = 'C';
    input.trigger('input');
    const results = search.find('.results');
    const resultItems = results.findAll('.result .content .title');
    expect(resultItems.at(0).text()).to.equal('Cat');
    expect(resultItems.at(1).text()).to.equal('Catfish');
  });

  it('should search using non case sensitive mode', () => {
    const source = [{ title: 'Horse' }, { title: 'Parrot' }, { title: 'Cat' }, { title: 'catfish' }];
    const search = mount(Search, { propsData: { source } });
    const input = search.find('input.prompt');
    input.trigger('focus');
    input.element.value = 'c';
    input.trigger('input');
    const results = search.find('.results');
    const resultItems = results.findAll('.result .content .title');
    expect(resultItems.at(0).text()).to.equal('Cat');
    expect(resultItems.at(1).text()).to.equal('catfish');
  });

  it('should emit input event when value changes', () => {
    const horse = { title: 'Horse' };
    const source = [horse];
    const search = mount(Search, { propsData: { source } });
    const input = search.find('input.prompt');
    input.trigger('focus');
    input.element.value = 'Horse';
    input.trigger('input');
    const result = search.find('.result');
    result.trigger('click');

    expect(search.emitted().input[0][0]).to.equal(horse);
  });

  it('should display previous results when query is cleared', () => {
    const source = [{ title: 'Horse' }, { title: 'Parrot' }, { title: 'Cat' }, { title: 'catfish' }];
    const search = mount(Search, { propsData: { source } });
    const input = search.find('input.prompt');
    input.trigger('focus');
    input.element.value = 'c';
    input.trigger('input');
    const results = search.find('.results');

    input.element.value = '';
    input.trigger('input');
    expect(results.classes()).to.include('out');
    const resultItems = results.findAll('.result .content .title');
    expect(resultItems.at(0).text()).to.equal('Cat');
    expect(resultItems.at(1).text()).to.equal('catfish');
  });

  it('should display description', () => {
    const source = [{ title: 'Horse', description: 'horse description' }];
    const search = mount(Search, { propsData: { source } });

    const input = search.find('input.prompt');
    input.trigger('focus');
    input.element.value = 'h';
    input.trigger('input');
    const results = search.find('.results');

    const result = results.find('.result');
    expect(result.find('.content .title').text()).to.equal('Horse');
    expect(result.find('.content .description').text()).to.equal('horse description');
  });
});
