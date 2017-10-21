import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import { Icon } from '../../elements';

export default {
  name: 'SuiEmbed',
  data() {
    return {
      isActive: false,
    }
  },
  props: {
    active: {
      type: Boolean,
      description: 'An embed can be active',
    },
    aspectRatio: Enum(['4:3', '16:9', '21:9'], {
      description: 'An embed can specify an alternative aspect ratio (4:3 | 16:9 | 21:9)'
    }),
    icon: {
      type: String,
      description: 'Specifies an icon to use with placeholder content',
      default: 'video play',
    },
    placeholder: {
      type: String,
      description: 'A placeholder image for embed',
    },
    source: Enum(['youtube', 'vimeo'], {
      description: 'Specifies a source to use. Cannot be used together with url'
    }),
    url: {
      type: String,
      description: 'Specifies a url to use for embed. Cannot be used together with source'
    },
    autoplay: {
      type: Boolean,
      description: 'Setting to true or false will force autoplay',
    },
    brandedUI: {
      type: Boolean,
      description: 'Whether to show networks branded UI like title cards, or after video calls to action',
    },
    color: {
      type: String,
      description: 'Specifies what default chrome color with Vimeo or YouTube'
    },
    hd: {
      type: Boolean,
      description: 'Specifies whether to display YouTuber/Vimeo video in high-definition',
    },
    id: {
      type: String,
      description: 'Specifies an id for source',
    },
    iframe: {
      type: Object,
      description: 'Shorthand for HTML iframe',
    },
  },
  computed: {
    computedSource: function() {
      return !this.url && this.source;
    },
    computedAutoplay: function() {
      return this.computedSource && this.autoplay;
    },
    computedBrandUI: function() {
      return this.computedSource && this.brandedUI;
    },
    computedColor: function() {
      return this.computedSource && this.color;
    },
    computedHd: function() {
      return this.computedSource && this.hd;
    },
    computedId: function() {
      return this.computedSource && this.id;
    },
    computedIframe: function() {
      return this.computedSource && this.iframe;
    },
    computedUrl: function() {
      return !this.source && this.url;
    },
  },
  methods: {
    setActive() {
      this.isActive = true;
    },
  },
  mounted() {
    if (this.active) {
      this.setActive();
    }
  },
  render() {
    const self = this;
    function getSrc() {
      const autoplay = self.computedAutoplay || true,
        brandedUI = self.computedBrandUI || false,
        color = self.computedColor || '#444444',
        hd = self.computedHd || true,
        id = self.computedId || '',
        source = self.computedSource,
        url = self.computedUrl;

      if (source === 'youtube') {
        return [
          `//www.youtube.com/embed/${id}`,
          '?autohide=true',
          `&amp;autoplay=${autoplay}`,
          `&amp;color=${encodeURIComponent(color)}`,
          `&amp;hq=${hd}`,
          '&amp;jsapi=false',
          `&amp;modestbranding=${brandedUI}`,
        ].join('');
      }

      if (source === 'vimeo') {
        return [
          `//player.vimeo.com/video/${id}`,
          '?api=false',
          `&amp;autoplay=${autoplay}`,
          '&amp;byline=false',
          `&amp;color=${encodeURIComponent(color)}`,
          '&amp;portrait=false',
          '&amp;title=false',
        ].join('')
      }

      return url;
    };

    function renderEmbed() {
      if (!self.isActive) return null;
      if (self.$slots.default) return self.$slots.default;
      const iframe = self.iframe || {};
      const embedSrc = getSrc();
      return (
        <div className='embed'>
          <iframe src={iframe.src || embedSrc}
            allowFullScreen={iframe.allowFullScreen || false}
            frameBorder={iframe.frameBorder || 0}
            width={iframe.width || '100%'}
            height={iframe.height || '100%'}
            scrooling={iframe.scrolling || 'no'}
            title={iframe.title || `Embedded content from ${self.computedSource}`}
          />
        </div>
      );
    };

    const ElementType = getElementType(this);
    return (
      <ElementType
        onClick={this.setActive}
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.aspectRatio,
          this.isActive && 'active',
          'embed'
        )}
      >
        {this.icon && <Icon name={this.icon} />}
        {this.placeholder && <img class='placeholder' src={this.placeholder} />}
        {renderEmbed()}
      </ElementType>
    );
  },
};
