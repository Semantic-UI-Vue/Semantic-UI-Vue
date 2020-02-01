import { shallowMount } from '@vue/test-utils';
import { Statistic, StatisticGroup } from 'semantic-ui-vue/views/Statistic';
import Container from 'semantic-ui-vue/elements/Container/Container';

describe('Statistic', () => {
  it('should create a standalone SUI Statistic', () => {
    const statistic = shallowMount(Statistic);
    expect(statistic.is('div')).toEqual(true);
    expect(statistic.classes()).toContain('ui');
    expect(statistic.classes()).toContain('statistic');
    expect(statistic.text()).toEqual('');
  });

  it('should create a SUI Statistic with correct classes according to props', () => {
    const statistic = shallowMount(Statistic, {
      propsData: {
        horizontal: true,
        color: 'red',
        size: 'small',
        floated: 'right',
        inverted: true,
      },
    });
    expect(statistic.is('div')).toEqual(true);
    expect(statistic.classes()).toContain('ui');
    expect(statistic.classes()).toContain('statistic');
    expect(statistic.classes()).toContain('red');
    expect(statistic.classes()).toContain('small');
    expect(statistic.classes()).toContain('right');
    expect(statistic.classes()).toContain('floated');
    expect(statistic.classes()).toContain('inverted');
    expect(statistic.classes()).toContain('horizontal');
    expect(statistic.text()).toEqual('');
  });

  it('should not have "ui" class if is child of StatisticGroup', () => {
    const container = shallowMount(Container, {
      slots: { default: [Statistic, Statistic] },
    });
    expect(container.is('div')).toEqual(true);
    expect(container.classes()).toContain('ui');
    expect(container.classes()).toContain('container');
    const divs = container.findAll('div');
    expect(divs.length).toEqual(3);
    expect(divs.at(1).classes()).toContain('ui');
    expect(divs.at(1).classes()).toContain('statistic');
    expect(divs.at(2).classes()).toContain('ui');
    expect(divs.at(2).classes()).toContain('statistic');
    expect(container.text()).toEqual('');
  });

  it('should have "ui" class if is child of Component not StatisticGroup', () => {
    const statistics = shallowMount(StatisticGroup, {
      slots: { default: [Statistic, Statistic] },
    });
    expect(statistics.is('div')).toEqual(true);
    expect(statistics.classes()).toContain('ui');
    expect(statistics.classes()).toContain('statistics');
    const divs = statistics.findAll('div');
    expect(divs.length).toEqual(3);
    expect(divs.at(1).classes()).not.toContain('ui');
    expect(divs.at(1).classes()).toContain('statistic');
    expect(divs.at(2).classes()).not.toContain('ui');
    expect(divs.at(2).classes()).toContain('statistic');
    expect(statistics.text()).toEqual('');
  });

  it('should create a SUI Statistic with default slot', () => {
    const statistic = shallowMount(Statistic, {
      slots: { default: '<span>40 meters</span>' },
    });
    expect(statistic.is('div')).toEqual(true);
    expect(statistic.classes()).toContain('ui');
    expect(statistic.classes()).toContain('statistic');
    expect(statistic.text()).toEqual('40 meters');
  });
});
