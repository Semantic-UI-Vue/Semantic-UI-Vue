import { SemanticUIVueMixin } from '../../lib';
import { Enum } from '../../lib/PropTypes';
import Icon from '../Icon/Icon';

export default {
  name: 'SuiLabel',
  mixins: [SemanticUIVueMixin],
  description: 'A label displays content classification.',
  props: {
    attached: Enum(
      ['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right'],
      {
        description: 'A label can attach to a content segment.',
      },
    ),
    basic: {
      type: Boolean,
      description: 'A label can reduce its complexity.',
    },
    circular: {
      type: Boolean,
      description: 'A label can be circular.',
    },
    color: Enum.Color(),
    corner: Enum(['left', 'right'], {
      description: 'A label can position itself in the corner of an element.',
    }),
    empty: {
      type: Boolean,
      description: 'Formats the label as a dot.',
    },
    floating: {
      type: Boolean,
      description: 'Float above another element in the upper right corner.',
    },
    image: Boolean,
    pointing: Enum(['left', 'right', 'above', 'below'], {
      description: 'A label can point to content next to it.',
      type: Boolean,
    }),
    icon: String,
    ribbon: Enum(['left', 'right'], {
      description:
        'A label can appear as a ribbon attaching itself to an element.',
      type: Boolean,
    }),
    size: Enum.Size({
      description: 'A label can have different sizes.',
    }),
    tag: Enum.Color({
      description: 'A label can appear as a tag.',
      type: Boolean,
    }),
  },
  computed: {
    pointingClass() {
      if (!this.pointing) {
        return '';
      }

      let className = '';
      if (['left', 'right'].includes(this.pointing))
        className += `${this.pointing} `;
      className += 'pointing';
      if (['above', 'below'].includes(this.pointing))
        className += ` ${this.pointing}`;
      return className;
    },
  },
  render() {
    const ElementType = this.getElementType();

    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(
          'ui',
          this.pointingClass,
          this.color,
          this.size,
          this.circular && 'circular',
          this.empty && 'empty',
          this.floating && 'floating',
          this.basic && 'basic',
          this.image && 'image',
          this.attached && `${this.attached} attached`,
          this.ribbon && `${this.ribbon} ribbon`,
          this.corner && `${this.corner} corner`,
          this.tag && `${this.tag} tag`,
          'label',
        )}
      >
        {this.icon && <Icon name={this.icon} />}
        {this.$slots.default}
      </ElementType>
    );
  },
};
