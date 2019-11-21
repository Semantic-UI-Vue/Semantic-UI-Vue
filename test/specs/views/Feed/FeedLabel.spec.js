import { shallowMount } from '@vue/test-utils';
import FeedLabel from 'semantic-ui-vue/views/Feed/FeedLabel';

describe('FeedLabel', () => {
  it('should create a SUI FeedLabel', () => {
    const label = shallowMount(FeedLabel);
    expect(label.is('div')).toEqual(true);
    expect(label.classes()).toContain('label');
    expect(label.text()).toEqual('');
  });

  it('should create a SUI FeedLabel with content', () => {
    const label = shallowMount(FeedLabel, { propsData: { content: 'LABEL' } });
    expect(label.is('div')).toEqual(true);
    expect(label.classes()).toContain('label');
    expect(label.text()).toEqual('LABEL');
  });

  it('should create a SUI FeedLabel with icon', () => {
    const label = shallowMount(FeedLabel, { propsData: { icon: 'pencil' } });
    expect(label.is('div')).toEqual(true);
    expect(label.classes()).toContain('label');
    expect(label.contains('i')).toEqual(true);
    expect(label.find('i').classes()).toContain('pencil');
  });

  it('should create a SUI FeedLabel with image', () => {
    const label = shallowMount(FeedLabel, { propsData: { image: '/test-image.jpg' } });
    expect(label.is('div')).toEqual(true);
    expect(label.classes()).toContain('label');
    expect(label.contains('img')).toEqual(true);
    expect(label.find('img').attributes().src).toEqual('/test-image.jpg');
  });

  it('should only render default slot if both props and default slot exist', () => {
    const label = shallowMount(FeedLabel, {
      propsData: {
        image: '/test-image.jpg',
      },
      slots: {
        default: '<span>Only render this</span>',
      },
    });
    expect(label.is('div')).toEqual(true);
    expect(label.classes()).toContain('label');
    expect(label.text()).toEqual('Only render this');
  });

  it('should create a SUI FeedLabel with default slot', () => {
    const label = shallowMount(FeedLabel, { slots: { default: '<span>LABEL</span>' } });
    expect(label.is('div')).toEqual(true);
    expect(label.classes()).toContain('label');
    expect(label.text()).toEqual('LABEL');
  });
});
