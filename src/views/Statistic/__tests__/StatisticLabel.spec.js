import { shallowMount } from '@vue/test-utils';
import StatisticLabel from 'semantic-ui-vue/views/Statistic/StatisticLabel';

describe('StatisticLabel', () => {
  it('should create a SUI StatisticLabel', () => {
    const label = shallowMount(StatisticLabel);
    expect(label.is('div')).toEqual(true);
    expect(label.classes()).toContain('label');
    expect(label.text()).toEqual('');
  });

  it('should create a SUI StatisticLabel with default slot', () => {
    const label = shallowMount(StatisticLabel, {
      slots: { default: '<span>Stat label</span>' },
    });
    expect(label.is('div')).toEqual(true);
    expect(label.classes()).toContain('label');
    expect(label.text()).toEqual('Stat label');
  });
});
