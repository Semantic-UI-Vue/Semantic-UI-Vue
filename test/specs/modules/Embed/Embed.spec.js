import { shallow, mount } from '@vue/test-utils';
import Embed from 'src/modules/Embed/Embed';

describe('Embed', () => {
  it('should create a SUI Embed default without active, placeholder and iframe', () => {
    const embed = mount(Embed);
    expect(embed.is('div')).to.equal(true);
    expect(embed.classes()).to.include('ui');
    expect(embed.classes()).to.not.include('active');
    expect(embed.classes()).to.include('embed');
    expect(embed.contains('i')).to.equal(true);
    expect(embed.find('i').classes()).to.include('video');
    expect(embed.find('i').classes()).to.include('play');
    expect(embed.contains('img')).to.equal(false);
    expect(embed.contains('iframe')).to.equal(false);
    expect(embed.text()).to.equal('');
  });

  it('should create a SUI Embed with aspect ratio', () => {
    const embed = shallow(Embed, {
      propsData: {
        aspectRatio: '21:9',
      },
    });
    expect(embed.is('div')).to.equal(true);
    expect(embed.classes()).to.include('ui');
    expect(embed.classes()).to.include('21:9');
    expect(embed.classes()).to.include('embed');
    expect(embed.text()).to.equal('');
  });

  it('should create a SUI Embed with custom icon', () => {
    const embed = mount(Embed, {
      propsData: {
        icon: 'pencil',
      },
    });
    expect(embed.contains('i')).to.equal(true);
    expect(embed.find('i').classes()).to.include('pencil');
    expect(embed.text()).to.equal('');
  });

  it('should create a SUI Embed with placeholder image', () => {
    const embed = shallow(Embed, {
      propsData: {
        placeholder: '/placeholder',
      },
    });
    expect(embed.contains('img')).to.equal(true);
    expect(embed.find('img').attributes().src).to.equal('/placeholder');
    expect(embed.text()).to.equal('');
  });

  it('should create a SUI Embed that active after click', () => {
    const embed = shallow(Embed);
    expect(embed.classes()).to.not.include('active');
    expect(embed.findAll('div').length).to.equal(1);
    expect(embed.contains('iframe')).to.equal(false);
    embed.trigger('click');
    expect(embed.classes()).to.include('active');
    expect(embed.findAll('div').length).to.equal(2);
    expect(embed.findAll('div').at(1).classes()).to.include('embed');
    expect(embed.contains('iframe')).to.equal(true);
    expect(embed.text()).to.equal('');
  });

  it('should create a SUI Embed with default slot when state is active', () => {
    const embed = shallow(Embed, {
      propsData: {
        active: true,
      },
      slots: {
        default: '<span>This is default</span>',
      },
    });
    expect(embed.classes()).to.include('active');
    expect(embed.contains('iframe')).to.equal(false);
    expect(embed.contains('span')).to.equal(true);
    expect(embed.text()).to.equal('This is default');
  });

  it('should create a SUI Embed with youtube iframe', () => {
    const embed = shallow(Embed, {
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
    expect(embed.contains('iframe')).to.equal(true);
    const iframe = embed.find('iframe');
    expect(iframe.attributes().src).to.equal(expectedIframeSrc);
    expect(iframe.attributes().width).to.equal('100%');
    expect(iframe.attributes().height).to.equal('100%');
    expect(iframe.attributes().frameborder).to.equal('0');
    expect(iframe.attributes().scrolling).to.equal('no');
    expect(iframe.attributes().title).to.equal('Embedded content from youtube');
  });

  it('should create a SUI Embed with vimeo iframe', () => {
    const embed = shallow(Embed, {
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
    expect(embed.contains('iframe')).to.equal(true);
    const iframe = embed.find('iframe');
    expect(iframe.attributes().src).to.equal(expectedIframeSrc);
    expect(iframe.attributes().width).to.equal('100%');
    expect(iframe.attributes().height).to.equal('100%');
    expect(iframe.attributes().frameborder).to.equal('0');
    expect(iframe.attributes().scrolling).to.equal('no');
    expect(iframe.attributes().title).to.equal('Embedded content from vimeo');
  });

  it('should create a SUI Embed with custom host iframe', () => {
    const embed = shallow(Embed, {
      propsData: {
        url: 'https://www.example.com',
        active: true,
      },
    });
    expect(embed.contains('iframe')).to.equal(true);
    const iframe = embed.find('iframe');
    expect(iframe.attributes().src).to.equal('https://www.example.com');
    expect(iframe.attributes().width).to.equal('100%');
    expect(iframe.attributes().height).to.equal('100%');
    expect(iframe.attributes().frameborder).to.equal('0');
    expect(iframe.attributes().scrolling).to.equal('no');
    expect(iframe.attributes().title).to.equal('Embedded content from custom host');
  });

  it('should create a SUI Embed with iframe shorthand', () => {
    const embed = shallow(Embed, {
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
    expect(embed.contains('iframe')).to.equal(true);
    const iframe = embed.find('iframe');
    expect(iframe.attributes().src).to.equal('https://www.example.com');
    expect(iframe.attributes().width).to.equal('75%');
    expect(iframe.attributes().height).to.equal('100%');
    expect(iframe.attributes().frameborder).to.equal('0');
    expect(iframe.attributes().scrolling).to.equal('no');
    expect(iframe.attributes().allowfullscreen).to.equal('true');
    expect(iframe.attributes().style).to.equal('padding: 10px;');
    expect(iframe.attributes().title).to.equal('Embedded content from custom host');
  });
});
