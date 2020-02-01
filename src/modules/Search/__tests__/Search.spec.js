import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Search from 'semantic-ui-vue/modules/Search/Search';
import Results from 'semantic-ui-vue/modules/Search/Results';

describe('Search', () => {
  testClassFromProps(Search, ['ui', 'search']);

  it('should create a SUI Search', () => {
    const search = shallowMount(Search, {});
    expect(search.find('input'));
    expect(search.exists()).toEqual(true);
  });

  it('should not display results before first search', () => {
    const search = shallowMount(Search, { propsData: { query: null } });
    const results = search.find(Results);
    expect(results.exists()).toEqual(false);
  });

  it('should display the results when the minimum characters are input', async () => {
    const search = shallowMount(Search, { propsData: { minCharacters: 5 } });
    const input = search.find('input.prompt');
    input.element.value = '1234';
    input.trigger('input');
    await Vue.nextTick();
    let results = search.find(Results);
    expect(results.exists()).toEqual(false);
    input.element.value = '12345';
    input.trigger('input');
    await Vue.nextTick();
    results = search.find(Results);
    expect(results.exists()).toEqual(true);
  });

  it('should show results only when focused', async () => {
    const search = shallowMount(Search);
    const input = search.find('input.prompt');
    input.element.value = 'a';
    input.trigger('input');
    await Vue.nextTick();
    let results = search.find(Results);
    expect(results.props()).toMatchObject({ visible: false });
    input.trigger('focus');
    await Vue.nextTick();
    results = search.find(Results);
    expect(results.props()).toMatchObject({ visible: true });
  });

  it('should hide results on blur', async () => {
    const search = shallowMount(Search);
    const input = search.find('input.prompt');
    input.element.value = 'a';
    input.trigger('input');
    input.trigger('focus');
    input.trigger('blur');
    await Vue.nextTick();
    const results = search.find(Results);
    expect(results.props()).toMatchObject({ visible: false });
  });

  it('should set pass firstFocus to results', async () => {
    const search = shallowMount(Search);
    const input = search.find('input.prompt');
    input.element.value = 'a';
    input.trigger('input');
    await Vue.nextTick();
    let results = search.find(Results);
    expect(results.props()).toMatchObject({ firstFocus: false });
    input.trigger('focus');
    await Vue.nextTick();
    results = search.find(Results);
    expect(results.props()).toMatchObject({ firstFocus: true });
    input.trigger('blur');
    await Vue.nextTick();
    results = search.find(Results);
    expect(results.props()).toMatchObject({ firstFocus: true });
  });

  it('should wrap the input inside a .input div', () => {
    const search = shallowMount(Search, { propsData: { input: true } });
    const input = search.find('.input');
    expect(input.exists()).toEqual(true);
  });

  it('should update the value when a result is selected', async () => {
    const search = shallowMount(Search);
    const input = search.find('input.prompt');
    input.element.value = 'foo';
    input.trigger('input');
    await Vue.nextTick();
    let results = search.find(Results);
    expect(results.props().query).toEqual('foo');
    const item = {
      title: 'title',
      value: 'value',
    };
    results.vm.$listeners.selected(item);
    await Vue.nextTick();
    results = search.find(Results);
    expect(results.props().query).toEqual(item.title);
    expect(search.emitted()).toMatchObject({ input: [[item]] });
  });
});
