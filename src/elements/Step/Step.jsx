import { classes, getChildProps, getElementType } from '../../lib';
import SuiIcon from '../Icon/Icon';
import SuiStepContent from './StepContent';
import SuiStepTitle from './StepTitle';
import SuiStepDescription from './StepDescription';

export default {
  name: 'SuiStep',
  components: { SuiIcon, SuiStepContent, SuiStepTitle, SuiStepDescription },
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
