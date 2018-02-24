import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import SuiBreadcrumbSection from './BreadcrumbSection';
import SuiBreadcrumbDivider from './BreadcrumbDivider';

export default {
  name: 'SuiBreadcrumb',
  components: { SuiBreadcrumbDivider, SuiBreadcrumbSection },
  mixins: [listenersMixin],
  props: {
    icon: String,
    sections: Array,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
        class={classes('ui', 'breadcrumb')}
      >
        {this.$slots.default || this.sections.map(({ active, content, key, link }, index) => {
          const sectionEl = (
            <SuiBreadcrumbSection key={key} active={active} link={link}>
              {content}
            </SuiBreadcrumbSection>
          );

          if (index === 0) return sectionEl;

          return [' ', <SuiBreadcrumbDivider icon={this.icon} />, ' ', sectionEl];
        })}
      </ElementType>
    );
  },
};
