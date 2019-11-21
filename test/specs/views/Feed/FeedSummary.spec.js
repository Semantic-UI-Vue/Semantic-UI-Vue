import { shallowMount } from '@vue/test-utils';
import FeedSummary from 'semantic-ui-vue/views/Feed/FeedSummary';

describe('FeedSummary', () => {
  it('should create a SUI FeedSummary', () => {
    const summary = shallowMount(FeedSummary);
    expect(summary.is('div')).toEqual(true);
    expect(summary.classes()).toContain('summary');
    expect(summary.text()).toEqual('');
  });

  it('should create a SUI FeedSummary with content', () => {
    const summary = shallowMount(FeedSummary, { propsData: { content: 'This is a summary' } });
    expect(summary.is('div')).toEqual(true);
    expect(summary.classes()).toContain('summary');
    expect(summary.text()).toEqual('This is a summary');
  });

  it('should create a SUI FeedSummary with FeedUser and FeedDate', () => {
    const summary = shallowMount(FeedSummary, { propsData: {
      date: '2 hours ago',
      content: 'This is a summary',
      user: 'Jenny',
    } });
    expect(summary.is('div')).toEqual(true);
    expect(summary.classes()).toContain('summary');
    expect(summary.text()).toContain('This is a summary');
    expect(summary.contains('a')).toEqual(true);
    expect(summary.find('a').classes()).toContain('user');
    expect(summary.find('a').text()).toEqual('Jenny');
    const divs = summary.findAll('div');
    expect(divs.length).toEqual(2);
    expect(divs.at(1).classes()).toContain('date');
    expect(divs.at(1).text()).toEqual('2 hours ago');
  });

  it('should only render default slot if both props and default slot exist', () => {
    const summary = shallowMount(FeedSummary, {
      propsData: {
        date: '2 hours ago',
        content: 'This is a summary',
        user: 'Jenny',
      },
      slots: {
        default: '<span>Only render this</span>',
      },
    });
    expect(summary.is('div')).toEqual(true);
    expect(summary.classes()).toContain('summary');
    expect(summary.text()).toEqual('Only render this');
  });

  it('should create a SUI FeedSummary with default slot', () => {
    const summary = shallowMount(FeedSummary, { slots: { default: '<span>Summary text</span>' } });
    expect(summary.is('div')).toEqual(true);
    expect(summary.classes()).toContain('summary');
    expect(summary.text()).toEqual('Summary text');
  });
});
