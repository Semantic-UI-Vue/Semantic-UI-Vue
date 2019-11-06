import { shallow, mount } from '@vue/test-utils';
import FeedSummary from 'src/views/Feed/FeedSummary';

describe('FeedSummary', () => {
  it('should create a SUI FeedSummary', () => {
    const summary = shallow(FeedSummary);
    expect(summary.is('div')).to.equal(true);
    expect(summary.classes()).to.include('summary');
    expect(summary.text()).to.equal('');
  });

  it('should create a SUI FeedSummary with content', () => {
    const summary = shallow(FeedSummary, { propsData: { content: 'This is a summary' } });
    expect(summary.is('div')).to.equal(true);
    expect(summary.classes()).to.include('summary');
    expect(summary.text()).to.equal('This is a summary');
  });

  it('should create a SUI FeedSummary with FeedUser and FeedDate', () => {
    const summary = mount(FeedSummary, { propsData: {
      date: '2 hours ago',
      content: 'This is a summary',
      user: 'Jenny',
    } });
    expect(summary.is('div')).to.equal(true);
    expect(summary.classes()).to.include('summary');
    expect(summary.text()).to.contains('This is a summary');
    expect(summary.contains('a')).to.equal(true);
    expect(summary.find('a').classes()).to.include('user');
    expect(summary.find('a').text()).to.equal('Jenny');
    const divs = summary.findAll('div');
    expect(divs.length).to.equal(2);
    expect(divs.at(1).classes()).to.include('date');
    expect(divs.at(1).text()).to.equal('2 hours ago');
  });

  it('should only render default slot if both props and default slot exist', () => {
    const summary = shallow(FeedSummary, {
      propsData: {
        date: '2 hours ago',
        content: 'This is a summary',
        user: 'Jenny',
      },
      slots: {
        default: '<span>Only render this</span>',
      },
    });
    expect(summary.is('div')).to.equal(true);
    expect(summary.classes()).to.include('summary');
    expect(summary.text()).to.equal('Only render this');
  });

  it('should create a SUI FeedSummary with default slot', () => {
    const summary = shallow(FeedSummary, { slots: { default: '<span>Summary text</span>' } });
    expect(summary.is('div')).to.equal(true);
    expect(summary.classes()).to.include('summary');
    expect(summary.text()).to.equal('Summary text');
  });
});
