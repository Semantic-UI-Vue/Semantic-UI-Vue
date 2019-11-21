import { shallowMount } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Search from 'semantic-ui-vue/modules/Search/Search';

describe('Search', () => {
  testClassFromProps(Search, ['ui', 'search']);

  it('should by default search when min 1 character is typed', () => {
    const search = shallowMount(Search);

    const input = search.find('input.prompt');
    input.trigger('focus');
    input.element.value = 'c';
    input.trigger('input');
    const results = search.find('.results');

    expect(results.classes()).toContain('in');
  });

  it('should not search when a number of typed characters is smaller than min characters', () => {
    const search = shallowMount(Search, { propsData: { minCharacters: 2 } });
    search.setProps({});

    const input = search.find('input.prompt');
    input.element.value = 'a';
    input.trigger('input');
    input.trigger('focus');
    const results = search.find('.results');

    expect(results.exists()).toEqual(false);
  });

  it('should search when a number of typed characters is equal to min characters', () => {
    const source = [{ title: 'Horse' }, { title: 'Parrot' }, { title: 'Cat' }, { title: 'catfish' }];
    const search = shallowMount(Search, { propsData: { source, minCharacters: 3 } });

    const input = search.find('input.prompt');
    input.trigger('focus');
    input.element.value = 'cat';
    input.trigger('input');
    const results = search.find('.results');

    expect(results.classes()).toContain('in');
    const resultItems = results.findAll('.result .content .title');
    expect(resultItems.at(0).text()).toEqual('Cat');
    expect(resultItems.at(1).text()).toEqual('catfish');
  });

  it('should search when a number of typed characters is greater than min characters', () => {
    const source = [{ title: 'Horse' }, { title: 'Parrot' }, { title: 'Cat' }, { title: 'catfish' }];
    const search = shallowMount(Search, { propsData: { source, minCharacters: 3 } });

    const input = search.find('input.prompt');
    input.trigger('focus');
    input.element.value = 'catf';
    input.trigger('input');
    const results = search.find('.results');

    expect(results.classes()).toContain('in');
    const resultItems = results.findAll('.result .content .title');
    expect(resultItems.at(0).text()).toEqual('catfish');
  });
});
