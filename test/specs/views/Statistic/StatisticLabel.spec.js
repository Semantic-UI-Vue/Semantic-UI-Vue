import { shallow } from '@vue/test-utils';
import StatisticLabel from 'semantic-ui-vue/views/Statistic/StatisticLabel';

describe('StatisticLabel', () => {
  it('should create a SUI StatisticLabel', () => {
    const label = shallow(StatisticLabel);
    expect(label.is('div')).to.equal(true);
    expect(label.classes()).to.include('label');
    expect(label.text()).to.equal('');
  });

  it('should create a SUI StatisticLabel with default slot', () => {
    const label = shallow(StatisticLabel, { slots: { default: '<span>Stat label</span>' } });
    expect(label.is('div')).to.equal(true);
    expect(label.classes()).to.include('label');
    expect(label.text()).to.equal('Stat label');
  });
});
