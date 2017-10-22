import { shallow } from 'vue-test-utils';
import Embed from 'src/modules/Embed/Embed';

describe('Embed', () => {
  it('should create a SUI Embed default without active, placeholder and iframe', () => {
    const embed = shallow(Embed);
    expect(embed.is('div')).to.equal(true);
    expect(embed.hasClass('ui')).to.equal(true);
    expect(embed.hasClass('active')).to.equal(false);
    expect(embed.hasClass('embed')).to.equal(true);
    expect(embed.contains('i')).to.equal(true);
    expect(embed.find('i').hasClass('video')).to.equal(true);
    expect(embed.find('i').hasClass('play')).to.equal(true);
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
    expect(embed.hasClass('ui')).to.equal(true);
    expect(embed.hasClass('21:9')).to.equal(true);
    expect(embed.hasClass('embed')).to.equal(true);
    expect(embed.text()).to.equal('');
  });

  it('should create a SUI Embed with custom icon', () => {
    const embed = shallow(Embed, {
      propsData: {
        icon: 'pencil',
      },
    });
    expect(embed.contains('i')).to.equal(true);
    expect(embed.find('i').hasClass('pencil')).to.equal(true);
    expect(embed.text()).to.equal('');
  });

  it('should create a SUI Embed with placeholder image', () => {
    const embed = shallow(Embed, {
      propsData: {
        placeholder: '/placeholder',
      },
    });
    expect(embed.contains('img')).to.equal(true);
    expect(embed.find('img').hasAttribute('src', '/placeholder')).to.equal(true);
    expect(embed.text()).to.equal('');
  });

  it('should create a SUI Embed that active after click', () => {
    const embed = shallow(Embed);
    expect(embed.hasClass('active')).to.equal(false);
    expect(embed.findAll('div').length).to.equal(1);
    expect(embed.contains('iframe')).to.equal(false);
    embed.trigger('click');
    expect(embed.hasClass('active')).to.equal(true);
    expect(embed.findAll('div').length).to.equal(2);
    expect(embed.findAll('div').at(1).hasClass('embed')).to.equal(true);
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
    expect(embed.hasClass('active')).to.equal(true);
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
    expect(iframe.hasAttribute('src', expectedIframeSrc)).to.equal(true);
    expect(iframe.hasAttribute('width', '100%')).to.equal(true);
    expect(iframe.hasAttribute('height', '100%')).to.equal(true);
    expect(iframe.hasAttribute('frameborder', '0')).to.equal(true);
    expect(iframe.hasAttribute('scrolling', 'no')).to.equal(true);
    expect(iframe.hasAttribute('title', 'Embedded content from youtube')).to.equal(true);
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
    expect(iframe.hasAttribute('src', expectedIframeSrc)).to.equal(true);
    expect(iframe.hasAttribute('width', '100%')).to.equal(true);
    expect(iframe.hasAttribute('height', '100%')).to.equal(true);
    expect(iframe.hasAttribute('frameborder', '0')).to.equal(true);
    expect(iframe.hasAttribute('scrolling', 'no')).to.equal(true);
    expect(iframe.hasAttribute('title', 'Embedded content from vimeo')).to.equal(true);
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
    expect(iframe.hasAttribute('src', 'https://www.example.com')).to.equal(true);
    expect(iframe.hasAttribute('width', '100%')).to.equal(true);
    expect(iframe.hasAttribute('height', '100%')).to.equal(true);
    expect(iframe.hasAttribute('frameborder', '0')).to.equal(true);
    expect(iframe.hasAttribute('scrolling', 'no')).to.equal(true);
    expect(iframe.hasAttribute('title', 'Embedded content from custom host')).to.equal(true);
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
    expect(iframe.hasAttribute('src', 'https://www.example.com')).to.equal(true);
    expect(iframe.hasAttribute('width', '75%')).to.equal(true);
    expect(iframe.hasAttribute('height', '100%')).to.equal(true);
    expect(iframe.hasAttribute('frameborder', '0')).to.equal(true);
    expect(iframe.hasAttribute('scrolling', 'no')).to.equal(true);
    expect(iframe.hasAttribute('allowfullscreen', 'true')).to.equal(true);
    expect(iframe.hasAttribute('style', 'padding: 10px;')).to.equal(true);
    expect(iframe.hasAttribute('title', 'Embedded content from custom host')).to.equal(true);
  });
});
