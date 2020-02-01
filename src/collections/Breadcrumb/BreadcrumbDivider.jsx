import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiBreadcrumbDivider',
  mixins: [SemanticUIVueMixin],
  props: {
    icon: String,
  },
  render() {
    const ElementType = this.getElementType(this.icon ? 'i' : 'div');
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes(this.icon, this.icon && 'icon', 'divider')}
      >
        {!this.icon && (this.$slots.default || '/')}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiBreadcrumb',
  },
};
