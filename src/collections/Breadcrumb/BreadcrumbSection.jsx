import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiBreadcrumbSection',
  mixins: [listenersMixin],
  props: {
    active: Boolean,
    link: Boolean,
  },
  render() {
    const ElementType = getElementType(this, this.link ? 'a' : 'div');
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
        class={classes(
          this.active && 'active',
          this.link && 'link',
          'section',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiBreadcrumb',
  },
};
