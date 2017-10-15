import { shallow } from 'vue-test-utils';
import { Statistic, StatisticGroup } from 'src/views/Statistic';
import Container from 'src/elements/Container/Container';

describe('Statistic', () => {
  it('should create a standalone SUI Statistic', () => {
    const statistic = shallow(Statistic);
    expect(statistic.is('div')).to.equal(true);
    expect(statistic.hasClass('ui')).to.equal(true);
    expect(statistic.hasClass('statistic')).to.equal(true);
    expect(statistic.text()).to.equal('');
  });

  it('should create a SUI Statistic with correct classes according to props', () => {
    const statistic = shallow(Statistic, {
      propsData: {
        horizontal: true,
        color: 'red',
        size: 'small',
        floated: 'right',
        inverted: true,
      },
    });
    expect(statistic.is('div')).to.equal(true);
    expect(statistic.hasClass('ui')).to.equal(true);
    expect(statistic.hasClass('statistic')).to.equal(true);
    expect(statistic.hasClass('red')).to.equal(true);
    expect(statistic.hasClass('small')).to.equal(true);
    expect(statistic.hasClass('right')).to.equal(true);
    expect(statistic.hasClass('floated')).to.equal(true);
    expect(statistic.hasClass('inverted')).to.equal(true);
    expect(statistic.hasClass('horizontal')).to.equal(true);
    expect(statistic.text()).to.equal('');
  });

  it('should not have "ui" class if is child of StatisticGroup', () => {
    const container = shallow(Container, { slots: { default: [Statistic, Statistic] } });
    expect(container.is('div')).to.equal(true);
    expect(container.hasClass('ui')).to.equal(true);
    expect(container.hasClass('container')).to.equal(true);
    const divs = container.findAll('div');
    expect(divs.length).to.equal(3);
    expect(divs.at(1).hasClass('ui')).to.equal(true);
    expect(divs.at(1).hasClass('statistic')).to.equal(true);
    expect(divs.at(2).hasClass('ui')).to.equal(true);
    expect(divs.at(2).hasClass('statistic')).to.equal(true);
    expect(container.text()).to.equal('');
  });

  it('should have "ui" class if is child of Component not StatisticGroup', () => {
    const statistics = shallow(StatisticGroup, { slots: { default: [Statistic, Statistic] } });
    expect(statistics.is('div')).to.equal(true);
    expect(statistics.hasClass('ui')).to.equal(true);
    expect(statistics.hasClass('statistics')).to.equal(true);
    const divs = statistics.findAll('div');
    expect(divs.length).to.equal(3);
    expect(divs.at(1).hasClass('ui')).to.equal(false);
    expect(divs.at(1).hasClass('statistic')).to.equal(true);
    expect(divs.at(2).hasClass('ui')).to.equal(false);
    expect(divs.at(2).hasClass('statistic')).to.equal(true);
    expect(statistics.text()).to.equal('');
  });

  it('should create a SUI Statistic with default slot', () => {
    const statistic = shallow(Statistic, { slots: { default: '<span>40 meters</span>' } });
    expect(statistic.is('div')).to.equal(true);
    expect(statistic.hasClass('ui')).to.equal(true);
    expect(statistic.hasClass('statistic')).to.equal(true);
    expect(statistic.text()).to.equal('40 meters');
  });
});
