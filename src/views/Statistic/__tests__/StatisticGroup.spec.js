import { shallowMount } from '@vue/test-utils';
import StatisticGroup from 'semantic-ui-vue/views/Statistic/StatisticGroup';

describe('StatisticGroup', () => {
  it('should create a standalone SUI StatisticGroup', () => {
    const statistics = shallowMount(StatisticGroup);
    expect(statistics.is('div')).toEqual(true);
    expect(statistics.classes()).toContain('ui');
    expect(statistics.classes()).toContain('statistics');
    expect(statistics.text()).toEqual('');
  });

  it('should create a SUI StatisticGroup with correct classes according to props', () => {
    const statistics = shallowMount(StatisticGroup, {
      propsData: {
        horizontal: true,
      },
    });
    expect(statistics.is('div')).toEqual(true);
    expect(statistics.classes()).toContain('ui');
    expect(statistics.classes()).toContain('statistics');
    expect(statistics.classes()).toContain('horizontal');
    expect(statistics.text()).toEqual('');
  });

  it('should create a SUI StatisticGroup with default slot', () => {
    const statistics = shallowMount(StatisticGroup, {
      slots: { default: '<span>40 meters</span>' },
    });
    expect(statistics.is('div')).toEqual(true);
    expect(statistics.classes()).toContain('ui');
    expect(statistics.classes()).toContain('statistics');
    expect(statistics.text()).toEqual('40 meters');
  });
});
