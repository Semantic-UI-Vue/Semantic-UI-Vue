import { SemanticUIVueMixin } from '../../lib';
import SuiStepDescription from './StepDescription';
import SuiStepTitle from './StepTitle';

export default {
  name: 'SuiStepContent',
  components: { SuiStepDescription, SuiStepTitle },
  mixins: [SemanticUIVueMixin],
  props: {
    description: String,
    title: String,
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType {...this.getChildPropsAndListeners()} class="content">
        {this.title && <SuiStepTitle>{this.title}</SuiStepTitle>}
        {this.description && (
          <SuiStepDescription>{this.description}</SuiStepDescription>
        )}
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiStep',
  },
};
