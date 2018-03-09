import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';
import SuiIcon from '../Icon/Icon';
import SuiStepContent from './StepContent';
import SuiStepTitle from './StepTitle';
import SuiStepDescription from './StepDescription';

export default {
  name: 'SuiStep',
  components: { SuiIcon, SuiStepContent, SuiStepTitle, SuiStepDescription },
  mixins: [listenersMixin],
  props: {
    active: Boolean,
    completed: Boolean,
    description: String,
    disabled: Boolean,
    icon: String,
    title: String,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
        class={classes(
          'ui',
          this.active && 'active',
          this.completed && 'completed',
          this.disabled && 'disabled',
          'step',
        )}
      >
        {this.icon && <SuiIcon name={this.icon} />}
        {(this.title || this.description) ? (
          <SuiStepContent>
            {this.title && <SuiStepTitle>{this.title}</SuiStepTitle>}
            {this.description && <SuiStepDescription>{this.description}</SuiStepDescription>}
          </SuiStepContent>
        ) : this.$slots.default}
      </ElementType>
    );
  },
};
