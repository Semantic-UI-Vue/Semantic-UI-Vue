import { shallowMount } from '@vue/test-utils';
import FeedContent from 'semantic-ui-vue/views/Feed/FeedContent';

describe('FeedContent', () => {
  it('should create a SUI FeedContent', () => {
    const content = shallowMount(FeedContent);
    expect(content.is('div')).toEqual(true);
    expect(content.classes()).toContain('content');
    expect(content.text()).toEqual('');
  });

  it('should create a SUI FeedContent with content', () => {
    const content = shallowMount(FeedContent, { propsData: { content: 'Main content here' } });
    expect(content.is('div')).toEqual(true);
    expect(content.classes()).toContain('content');
    expect(content.text()).toEqual('Main content here');
  });

  it('should create a SUI FeedContent with content and other components', () => {
    const content = shallowMount(FeedContent, { propsData: {
      content: 'Main content here',
      date: '1 hour ago',
      summary: 'Summary text',
      extraImages: ['/image0.png', '/image1.png'],
      extraText: 'Extra text here',
      meta: '4 likes',
    } });
    expect(content.is('div')).toEqual(true);
    expect(content.classes()).toContain('content');
    const divs = content.findAll('div');
    expect(divs.length).is.equal(6);
    expect(divs.at(1).classes()).toContain('date');
    expect(divs.at(1).text()).toEqual('1 hour ago');
    expect(divs.at(2).classes()).toContain('summary');
    expect(divs.at(2).text()).toEqual('Summary text');
    expect(divs.at(3).classes()).toContain('extra');
    expect(divs.at(3).classes()).toContain('text');
    expect(divs.at(3).text()).toEqual('Extra text here');
    expect(divs.at(4).classes()).toContain('extra');
    expect(divs.at(4).classes()).toContain('images');
    const extraDivImgs = divs.at(4).findAll('img');
    expect(extraDivImgs.length).toEqual(2);
    expect(extraDivImgs.at(0).attributes().src).toEqual('/image0.png');
    expect(extraDivImgs.at(1).attributes().src).toEqual('/image1.png');
    expect(divs.at(5).classes()).toContain('meta');
    expect(divs.at(5).text()).toEqual('4 likes');
  });

  it('should only render default slot if both props and default slot exist', () => {
    const content = shallowMount(FeedContent, {
      propsData: {
        content: 'Main content here',
        date: '1 hour ago',
        summary: 'Summary text',
        extraImages: ['/image0.png', '/image1.png'],
        extraText: 'Extra text here',
        meta: '4 likes',
      },
      slots: {
        default: '<div>Main content here</div>',
      },
    });
    expect(content.is('div')).toEqual(true);
    expect(content.classes()).toContain('content');
    const divs = content.findAll('div');
    expect(divs.length).is.equal(2);
    expect(divs.at(1).text()).toEqual('Main content here');
  });

  it('should create a SUI FeedContent with default slot', () => {
    const content = shallowMount(FeedContent, { slots: { default: '<span>Main content here</span>' } });
    expect(content.is('div')).toEqual(true);
    expect(content.classes()).toContain('content');
    expect(content.text()).toEqual('Main content here');
  });
});
