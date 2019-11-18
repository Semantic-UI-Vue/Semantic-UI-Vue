import { shallow } from '@vue/test-utils';
import StatisticValue from 'semantic-ui-vue/views/Statistic/StatisticValue';

describe('StatisticValue', () => {
  it('should create a SUI StatisticValue', () => {
    const value = shallow(StatisticValue);
    expect(value.is('div')).to.equal(true);
    expect(value.classes()).to.not.include('text');
    expect(value.classes()).to.include('value');
    expect(value.text()).to.equal('');
  });

  it('should create a SUI StatisticValue with text class', () => {
    const value = shallow(StatisticValue, { propsData: { text: true } });
    expect(value.is('div')).to.equal(true);
    expect(value.classes()).to.include('text');
    expect(value.classes()).to.include('value');
    expect(value.text()).to.equal('');
  });

  it('should create a SUI StatisticValue with default slot', () => {
    const value = shallow(StatisticValue, { slots: { default: '<span>321 votes</span>' } });
    expect(value.is('div')).to.equal(true);
    expect(value.classes()).to.include('value');
    expect(value.text()).to.equal('321 votes');
  });
});
