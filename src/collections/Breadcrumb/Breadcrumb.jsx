import { SemanticUIVueMixin } from '../../lib';
import SuiBreadcrumbSection from './BreadcrumbSection';
import SuiBreadcrumbDivider from './BreadcrumbDivider';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiBreadcrumb',
  components: { SuiBreadcrumbDivider, SuiBreadcrumbSection },
  mixins: [SemanticUIVueMixin],
  props: {
    icon: String,
    sections: Array,
    size: Enum.Size(),
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('ui', this.size, 'breadcrumb')}
      >
        {this.$slots.default ||
          this.sections.map(({ active, content, key, link }, index) => {
            const sectionEl = (
              <SuiBreadcrumbSection key={key} active={active} link={link}>
                {content}
              </SuiBreadcrumbSection>
            );

            if (index === 0) return sectionEl;

            return [
              ' ',
              <SuiBreadcrumbDivider icon={this.icon} />,
              ' ',
              sectionEl,
            ];
          })}
      </ElementType>
    );
  },
};
