import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiBreadcrumbSection',
  props: {
    active: Boolean,
    link: Boolean,
  },
  render() {
    const ElementType = getElementType(this, this.link ? 'a' : 'div');
    return (
      <ElementType
        {...getChildProps(this)}
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
