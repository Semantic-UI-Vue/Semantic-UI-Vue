import { getChildProps, getElementType, listenersMixin } from '../../lib';
import SuiStepDescription from './StepDescription';
import SuiStepTitle from './StepTitle';

export default {
  name: 'SuiStepContent',
  mixins: [listenersMixin],
  components: { SuiStepDescription, SuiStepTitle },
  props: {
    description: String,
    title: String,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="content">
        {this.title && <SuiStepTitle>{this.title}</SuiStepTitle>}
        {this.description && <SuiStepDescription>{this.description}</SuiStepDescription>}
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiStep',
  },
};
