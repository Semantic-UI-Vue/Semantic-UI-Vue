import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiAdvertisement',
  description: 'An advertisement view presents thrif-party promotional content',
  mixins: [SemanticUIVueMixin],
  props: {
    centered: {
      type: Boolean,
      description: 'Center the advertisement',
      default: false,
    },
    test: {
      type: [String, Number],
      description: 'Text to be displayed on the advertisement.',
    },
    unit: Enum(
      [
        'medium rectangle',
        'large rectangle',
        'small rectangle',
        'vertical rectangle',
        'leaderboard',
        'half page',
        'mobile leaderboard',
        'mobile banner',
        'button',
        'square button',
        'small button',
        'skyscraper',
        'wide skyscraper',
        'banner',
        'vertical banner',
        'top banner',
        'half banner',
        'leaderboard',
        'large leaderboard',
        'billboard',
        'panorama',
        'netboard',
      ],
      {
        description: 'Define the size of the advertisement',
        type: String,
        required: true,
      },
    ),
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.centered ? 'centered' : null,
          this.unit,
          this.test ? 'test' : null,
          'ad',
        )}
        data-text={this.test}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
