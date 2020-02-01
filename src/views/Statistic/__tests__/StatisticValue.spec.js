import { shallowMount } from '@vue/test-utils';
import StatisticValue from 'semantic-ui-vue/views/Statistic/StatisticValue';

describe('StatisticValue', () => {
  it('should create a SUI StatisticValue', () => {
    const value = shallowMount(StatisticValue);
    expect(value.is('div')).toEqual(true);
    expect(value.classes()).not.toContain('text');
    expect(value.classes()).toContain('value');
    expect(value.text()).toEqual('');
  });

  it('should create a SUI StatisticValue with text class', () => {
    const value = shallowMount(StatisticValue, { propsData: { text: true } });
    expect(value.is('div')).toEqual(true);
    expect(value.classes()).toContain('text');
    expect(value.classes()).toContain('value');
    expect(value.text()).toEqual('');
  });

  it('should create a SUI StatisticValue with default slot', () => {
    const value = shallowMount(StatisticValue, {
      slots: { default: '<span>321 votes</span>' },
    });
    expect(value.is('div')).toEqual(true);
    expect(value.classes()).toContain('value');
    expect(value.text()).toEqual('321 votes');
  });
});
