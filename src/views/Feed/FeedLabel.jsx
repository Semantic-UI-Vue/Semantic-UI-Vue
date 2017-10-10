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
    let content = this.$slots.default;
    if (this.image) {
      content = <Image src={this.image} />;
    } else if (this.icon) {
      content = <Icon name={this.icon} />;
    }
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'label',
        )}
      >
        {content}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiFeed',
  },
};
