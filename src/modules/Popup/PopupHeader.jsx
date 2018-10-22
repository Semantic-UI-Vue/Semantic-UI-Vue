import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiPopupHeader',
  mixins: [SemanticUIVueMixin],
  render() {
    const ElementType = this.getElementType();

    return (
      <ElementType {...this.getChildPropsAndListeners()} class="header">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiPopup',
  },
};
