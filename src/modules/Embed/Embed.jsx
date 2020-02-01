import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import { Icon } from '../../elements';

export default {
  name: 'SuiEmbed',
  mixins: [SemanticUIVueMixin],
  props: {
    active: {
      type: Boolean,
      description: 'An embed can be active',
    },
    aspectRatio: Enum(['4:3', '16:9', '21:9'], {
      description:
        'An embed can specify an alternative aspect ratio (4:3 | 16:9 | 21:9)',
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
      description:
        'Specifies a source to use. Cannot be used together with url',
    }),
    url: {
      type: String,
      description:
        'Specifies a url to use for embed. Cannot be used together with source',
    },
    autoplay: {
      type: Boolean,
      description: 'Setting to true or false will force autoplay',
      default: true,
    },
    brandedUI: {
      type: Boolean,
      description:
        'Whether to show networks branded UI like title cards, or after video calls to action',
    },
    color: {
      type: String,
      description: 'Specifies what default chrome color with Vimeo or YouTube',
      default: '#444444',
    },
    hd: {
      type: Boolean,
      description:
        'Specifies whether to display YouTuber/Vimeo video in high-definition',
      default: true,
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
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    isActiveState() {
      return this.active || this.isActive;
    },
  },
  methods: {
    setActive() {
      this.isActive = true;
    },
  },
  render() {
    const self = this;
    function getSrc() {
      const source = !self.url && self.source;
      const url = !self.source && self.url;
      const autoplay = source && self.autoplay;
      const brandedUI = source && self.brandedUI;
      const color = source && self.color;
      const hd = source && self.hd;
      const id = source && self.id;

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
        ].join('');
      }

      return url;
    }

    function getStyleString(styleObj) {
      return Object.entries(styleObj).reduce(
        (styleString, entry) => `${styleString}${entry[0]}:${entry[1]};`,
        '',
      );
    }

    function renderEmbed() {
      if (!self.isActiveState) return null;
      if (self.$slots.default) return self.$slots.default;
      const iframe = self.iframe || {};
      const embedSrc = getSrc();
      const style = iframe.style ? getStyleString(iframe.style) : '';
      return (
        <div class="embed">
          <iframe
            src={iframe.src || embedSrc}
            allowFullScreen={iframe.allowFullScreen || false}
            frameBorder={iframe.frameBorder || 0}
            width={iframe.width || '100%'}
            height={iframe.height || '100%'}
            scrolling={iframe.scrolling || 'no'}
            title={
              iframe.title ||
              `Embedded content from ${self.source || 'custom host'}`
            }
            style={style}
          />
        </div>
      );
    }

    const ElementType = this.getElementType();
    return (
      <ElementType
        onClick={this.setActive}
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.aspectRatio,
          this.isActiveState && 'active',
          'embed',
        )}
      >
        {this.icon && <Icon name={this.icon} />}
        {this.placeholder && <img class="placeholder" src={this.placeholder} />}
        {renderEmbed()}
      </ElementType>
    );
  },
};
