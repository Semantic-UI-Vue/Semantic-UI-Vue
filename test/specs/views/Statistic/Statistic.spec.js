import { shallow } from 'vue-test-utils';
import { Statistic, StatisticGroup } from 'src/views/Statistic';
import Container from 'src/elements/Container/Container';

describe('Statistic', () => {
  it('should create a standalone SUI Statistic', () => {
    const statistic = shallow(Statistic);
    expect(statistic.is('div')).to.equal(true);
    expect(statistic.classes()).to.include('ui');
    expect(statistic.classes()).to.include('statistic');
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
    expect(statistic.classes()).to.include('ui');
    expect(statistic.classes()).to.include('statistic');
    expect(statistic.classes()).to.include('red');
    expect(statistic.classes()).to.include('small');
    expect(statistic.classes()).to.include('right');
    expect(statistic.classes()).to.include('floated');
    expect(statistic.classes()).to.include('inverted');
    expect(statistic.classes()).to.include('horizontal');
    expect(statistic.text()).to.equal('');
  });

  it('should not have "ui" class if is child of StatisticGroup', () => {
    const container = shallow(Container, { slots: { default: [Statistic, Statistic] } });
    expect(container.is('div')).to.equal(true);
    expect(container.classes()).to.include('ui');
    expect(container.classes()).to.include('container');
    const divs = container.findAll('div');
    expect(divs.length).to.equal(3);
    expect(divs.at(1).classes()).to.include('ui');
    expect(divs.at(1).classes()).to.include('statistic');
    expect(divs.at(2).classes()).to.include('ui');
    expect(divs.at(2).classes()).to.include('statistic');
    expect(container.text()).to.equal('');
  });

  it('should have "ui" class if is child of Component not StatisticGroup', () => {
    const statistics = shallow(StatisticGroup, { slots: { default: [Statistic, Statistic] } });
    expect(statistics.is('div')).to.equal(true);
    expect(statistics.classes()).to.include('ui');
    expect(statistics.classes()).to.include('statistics');
    const divs = statistics.findAll('div');
    expect(divs.length).to.equal(3);
    expect(divs.at(1).classes()).to.not.include('ui');
    expect(divs.at(1).classes()).to.include('statistic');
    expect(divs.at(2).classes()).to.not.include('ui');
    expect(divs.at(2).classes()).to.include('statistic');
    expect(statistics.text()).to.equal('');
  });

  it('should create a SUI Statistic with default slot', () => {
    const statistic = shallow(Statistic, { slots: { default: '<span>40 meters</span>' } });
    expect(statistic.is('div')).to.equal(true);
    expect(statistic.classes()).to.include('ui');
    expect(statistic.classes()).to.include('statistic');
    expect(statistic.text()).to.equal('40 meters');
  });
});
