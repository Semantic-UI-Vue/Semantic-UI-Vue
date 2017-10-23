import { shallow } from 'vue-test-utils';
import StatisticGroup from 'src/views/Statistic/StatisticGroup';

describe('StatisticGroup', () => {
  it('should create a standalone SUI StatisticGroup', () => {
    const statistics = shallow(StatisticGroup);
    expect(statistics.is('div')).to.equal(true);
    expect(statistics.hasClass('ui')).to.equal(true);
    expect(statistics.hasClass('statistics')).to.equal(true);
    expect(statistics.text()).to.equal('');
  });

  it('should create a SUI StatisticGroup with correct classes according to props', () => {
    const statistics = shallow(StatisticGroup, {
      propsData: {
        horizontal: true,
      },
    });
    expect(statistics.is('div')).to.equal(true);
    expect(statistics.hasClass('ui')).to.equal(true);
    expect(statistics.hasClass('statistics')).to.equal(true);
    expect(statistics.hasClass('horizontal')).to.equal(true);
    expect(statistics.text()).to.equal('');
  });

  it('should create a SUI StatisticGroup with default slot', () => {
    const statistics = shallow(StatisticGroup, { slots: { default: '<span>40 meters</span>' } });
    expect(statistics.is('div')).to.equal(true);
    expect(statistics.hasClass('ui')).to.equal(true);
    expect(statistics.hasClass('statistics')).to.equal(true);
    expect(statistics.text()).to.equal('40 meters');
  });
});
