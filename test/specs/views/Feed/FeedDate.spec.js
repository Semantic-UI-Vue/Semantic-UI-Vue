import { shallowMount } from '@vue/test-utils';
import FeedDate from 'semantic-ui-vue/views/Feed/FeedDate';

describe('FeedDate', () => {
  it('should create a SUI FeedDate', () => {
    const date = shallowMount(FeedDate);
    expect(date.is('div')).toEqual(true);
    expect(date.classes()).toContain('date');
    expect(date.text()).toEqual('');
  });

  it('should create a SUI FeedDate with content', () => {
    const date = shallowMount(FeedDate, { propsData: { content: '3 hours ago' } });
    expect(date.is('div')).toEqual(true);
    expect(date.classes()).toContain('date');
    expect(date.text()).toEqual('3 hours ago');
  });

  it('should only render default slot if both props and default slot exist', () => {
    const date = shallowMount(FeedDate, {
      propsData: {
        content: '3 hours ago',
      },
      slots: {
        default: '<span>5 minutes ago</span>',
      },
    });
    expect(date.is('div')).toEqual(true);
    expect(date.classes()).toContain('date');
    expect(date.text()).toEqual('5 minutes ago');
  });

  it('should create a SUI FeedDate with default slot', () => {
    const date = shallowMount(FeedDate, { slots: { default: '<span>3 hours ago</span>' } });
    expect(date.is('div')).toEqual(true);
    expect(date.classes()).toContain('date');
    expect(date.text()).toEqual('3 hours ago');
  });
});
