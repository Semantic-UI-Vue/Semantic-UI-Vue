import { shallow } from 'vue-test-utils';
import FeedSummary from 'src/views/Feed/FeedSummary';

describe('FeedSummary', () => {
  it('should create a SUI FeedSummary', () => {
    const summary = shallow(FeedSummary);
    expect(summary.is('div')).to.equal(true);
    expect(summary.hasClass('summary')).to.equal(true);
    expect(summary.text()).to.equal('');
  });

  it('should create a SUI FeedSummary with content', () => {
    const summary = shallow(FeedSummary, { propsData: { content: 'This is a summary' } });
    expect(summary.is('div')).to.equal(true);
    expect(summary.hasClass('summary')).to.equal(true);
    expect(summary.text()).to.equal('This is a summary');
  });

  it('should create a SUI FeedSummary with FeedUser and FeedDate', () => {
    const summary = shallow(FeedSummary, { propsData: {
      date: '2 hours ago',
      content: 'This is a summary',
      user: 'Jenny',
    } });
    expect(summary.is('div')).to.equal(true);
    expect(summary.hasClass('summary')).to.equal(true);
    expect(summary.text()).to.contains('This is a summary');
    expect(summary.contains('a')).to.equal(true);
    expect(summary.find('a').hasClass('user')).to.equal(true);
    expect(summary.find('a').text()).to.equal('Jenny');
    expect(summary.findAll('div').length).to.equal(2);
    expect(summary.findAll('div').at(1).hasClass('date')).to.equal(true);
    expect(summary.findAll('div').at(1).text()).to.equal('2 hours ago');
  });

  it('should create a SUI FeedSummary with default slot', () => {
    const summary = shallow(FeedSummary, { slots: { default: '<span>Summary text</span>' } });
    expect(summary.is('div')).to.equal(true);
    expect(summary.hasClass('summary')).to.equal(true);
    expect(summary.text()).to.equal('Summary text');
  });
});
