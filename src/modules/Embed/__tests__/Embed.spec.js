import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Embed from 'semantic-ui-vue/modules/Embed/Embed';
import { Icon } from 'semantic-ui-vue/elements';

describe('Embed', () => {
  it('should create a SUI Embed default without active, placeholder and iframe', () => {
    const embed = shallowMount(Embed);
    expect(embed.is('div')).toEqual(true);
    expect(embed.classes()).toContain('ui');
    expect(embed.classes()).not.toContain('active');
    expect(embed.classes()).toContain('embed');
    expect(embed.contains(Icon)).toEqual(true);
    expect(embed.find(Icon).props()).toMatchObject({ name: 'video play' });
    expect(embed.contains('img')).toEqual(false);
    expect(embed.contains('iframe')).toEqual(false);
    expect(embed.text()).toEqual('');
  });

  it('should create a SUI Embed with aspect ratio', () => {
    const embed = shallowMount(Embed, {
      propsData: {
        aspectRatio: '21:9',
      },
    });
    expect(embed.is('div')).toEqual(true);
    expect(embed.classes()).toContain('ui');
    expect(embed.classes()).toContain('21:9');
    expect(embed.classes()).toContain('embed');
    expect(embed.text()).toEqual('');
  });

  it('should create a SUI Embed with custom icon', () => {
    const embed = shallowMount(Embed, {
      propsData: {
        icon: 'pencil',
      },
    });
    expect(embed.contains(Icon)).toEqual(true);
    expect(embed.find(Icon).props()).toMatchObject({ name: 'pencil' });
    expect(embed.text()).toEqual('');
  });

  it('should create a SUI Embed with placeholder image', () => {
    const embed = shallowMount(Embed, {
      propsData: {
        placeholder: '/placeholder',
      },
    });
    expect(embed.contains('img')).toEqual(true);
    expect(embed.find('img').attributes().src).toEqual('/placeholder');
    expect(embed.text()).toEqual('');
  });

  it('should create a SUI Embed that active after click', async () => {
    const embed = shallowMount(Embed);
    expect(embed.classes()).not.toContain('active');
    expect(embed.findAll('div').length).toEqual(1);
    expect(embed.contains('iframe')).toEqual(false);
    embed.trigger('click');
    await Vue.nextTick();
    expect(embed.classes()).toContain('active');
    expect(embed.findAll('div').length).toEqual(2);
    expect(
      embed
        .findAll('div')
        .at(1)
        .classes(),
    ).toContain('embed');
    expect(embed.contains('iframe')).toEqual(true);
    expect(embed.text()).toEqual('');
  });

  it('should create a SUI Embed with default slot when state is active', () => {
    const embed = shallowMount(Embed, {
      propsData: {
        active: true,
      },
      slots: {
        default: '<span>This is default</span>',
      },
    });
    expect(embed.classes()).toContain('active');
    expect(embed.contains('iframe')).toEqual(false);
    expect(embed.contains('span')).toEqual(true);
    expect(embed.text()).toEqual('This is default');
  });

  it('should create a SUI Embed with youtube iframe', () => {
    const embed = shallowMount(Embed, {
      propsData: {
        source: 'youtube',
        id: 'testId',
        active: true,
      },
    });
    const expectedIframeSrc = [
      '//www.youtube.com/embed/testId',
      '?autohide=true',
      '&amp;autoplay=true',
      '&amp;color=%23444444',
      '&amp;hq=true',
      '&amp;jsapi=false',
      '&amp;modestbranding=false',
    ].join('');
    expect(embed.contains('iframe')).toEqual(true);
    const iframe = embed.find('iframe');
    expect(iframe.attributes().src).toEqual(expectedIframeSrc);
    expect(iframe.attributes().width).toEqual('100%');
    expect(iframe.attributes().height).toEqual('100%');
    expect(iframe.attributes().frameborder).toEqual('0');
    expect(iframe.attributes().scrolling).toEqual('no');
    expect(iframe.attributes().title).toEqual('Embedded content from youtube');
  });

  it('should create a SUI Embed with vimeo iframe', () => {
    const embed = shallowMount(Embed, {
      propsData: {
        source: 'vimeo',
        id: 'testId',
        active: true,
        autoplay: false,
        color: '#123456',
      },
    });
    const expectedIframeSrc = [
      '//player.vimeo.com/video/testId',
      '?api=false',
      '&amp;autoplay=false',
      '&amp;byline=false',
      '&amp;color=%23123456',
      '&amp;portrait=false',
      '&amp;title=false',
    ].join('');
    expect(embed.contains('iframe')).toEqual(true);
    const iframe = embed.find('iframe');
    expect(iframe.attributes().src).toEqual(expectedIframeSrc);
    expect(iframe.attributes().width).toEqual('100%');
    expect(iframe.attributes().height).toEqual('100%');
    expect(iframe.attributes().frameborder).toEqual('0');
    expect(iframe.attributes().scrolling).toEqual('no');
    expect(iframe.attributes().title).toEqual('Embedded content from vimeo');
  });

  it('should create a SUI Embed with custom host iframe', () => {
    const embed = shallowMount(Embed, {
      propsData: {
        url: 'https://www.example.com',
        active: true,
      },
    });
    expect(embed.contains('iframe')).toEqual(true);
    const iframe = embed.find('iframe');
    expect(iframe.attributes().src).toEqual('https://www.example.com');
    expect(iframe.attributes().width).toEqual('100%');
    expect(iframe.attributes().height).toEqual('100%');
    expect(iframe.attributes().frameborder).toEqual('0');
    expect(iframe.attributes().scrolling).toEqual('no');
    expect(iframe.attributes().title).toEqual(
      'Embedded content from custom host',
    );
  });

  it('should create a SUI Embed with iframe shorthand', () => {
    const embed = shallowMount(Embed, {
      propsData: {
        url: 'https://www.example.com',
        active: true,
        iframe: {
          width: '75%',
          allowFullScreen: true,
          style: {
            padding: '10px',
          },
        },
      },
    });
    expect(embed.contains('iframe')).toEqual(true);
    const iframe = embed.find('iframe');
    expect(iframe.attributes().src).toEqual('https://www.example.com');
    expect(iframe.attributes().width).toEqual('75%');
    expect(iframe.attributes().height).toEqual('100%');
    expect(iframe.attributes().frameborder).toEqual('0');
    expect(iframe.attributes().scrolling).toEqual('no');
    expect(iframe.attributes().allowfullscreen).toEqual('true');
    expect(iframe.attributes().style).toEqual('padding: 10px;');
    expect(iframe.attributes().title).toEqual(
      'Embedded content from custom host',
    );
  });
});
