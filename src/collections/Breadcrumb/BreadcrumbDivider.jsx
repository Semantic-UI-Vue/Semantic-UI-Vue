import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiBreadcrumbDivider',
  mixins: [listenersMixin],
  props: {
    icon: String,
  },
  render() {
    const ElementType = getElementType(this, this.icon ? 'i' : 'div');
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          this.icon,
          this.icon && 'icon',
          'divider',
        )}
      >
        {!this.icon && (this.$slots.default || '/')}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiBreadcrumb',
  },
};
