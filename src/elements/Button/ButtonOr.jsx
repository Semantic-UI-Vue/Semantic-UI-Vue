import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiButtonOr',
  mixins: [SemanticUIVueMixin],
  props: {
    text: String,
  },
  render() {
    const ElementType = this.getElementType();
    const attrs = {};
    if (this.text) attrs['data-text'] = this.text;
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class="or"
        {...{ attrs }}
      />
    );
  },
  meta: {
    parent: 'SuiButton',
  },
};
