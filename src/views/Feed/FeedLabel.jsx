import { classes, getChildProps, getElementType } from '../../lib';
import { Icon, Image } from '../../elements';

export default {
  name: 'SuiFeedLabel',
  props: {
    image: {
      type: String,
      description: 'An event can contain image label'
    },
    icon: {
      type: String,
      description: 'An event can contain icon label'
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'label',
        )}
      >
        {this.image ? <Image src={this.image} /> :
          (this.icon ? <Icon name={this.icon} /> : this.$slots.default) }
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
